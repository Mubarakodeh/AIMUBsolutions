import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { submitToAirtable } from '../lib/airtable';
import { sendToWebhook } from '../lib/webhook';
import { FormSubmission } from '../types/formSubmission';

interface FormData {
  fullName: string;
  email: string;
  service: string;
  companyName: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  companyName?: string;
  problemDescription?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    service: 'Core Services',
    companyName: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate service
    if (!formData.service) {
      newErrors.service = 'Please select a service';
      isValid = false;
    }

    // Validate company name
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      isValid = false;
    }

    // Validate problem description
    if (!formData.message.trim()) {
      newErrors.problemDescription = 'Problem description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare submission data
      const submissionData: FormSubmission = {
        full_name: formData.fullName,
        email: formData.email,
        service: formData.service,
        company_name: formData.companyName,
        problem_description: formData.message
      };
      
      // Submit to Airtable
      await submitToAirtable(submissionData, 'Demo Form');
      
      // Send to webhook - don't await to prevent blocking if webhook is slow
      sendToWebhook(submissionData).catch(err => {
        console.warn('Webhook notification failed, but form was submitted successfully:', err);
      });
      
      console.log('Form submitted successfully to Airtable and webhook');
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        service: 'Core Services',
        companyName: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSubmitted ? (
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thanks!</h2>
            <p className="text-xl text-slate-300 mb-8">We'll reach out shortly to schedule your free consultation.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
            <h1 className="text-5xl font-bold text-white mb-6">Schedule Your Free Consultation</h1>
            <p className="text-xl text-slate-300 mb-12">
              Discuss your business needs and learn how AI automation can help, with a 7-day risk-free trial after setup.
            </p>
            
            {submitError && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-200">{submitError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1">
                  Service <span className="text-red-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.service ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                >
                  <option value="Core Services">Core Services</option>
                  <option value="Add-Ons">Add-Ons</option>
                 <option value="Industry Bundles">Industry Bundles</option>
                  <option value="Custom Project">Custom Project</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-1">
                  Company Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.companyName ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="problemDescription" className="block text-sm font-medium text-slate-300 mb-1">
                  Notes <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="problemDescription"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.problemDescription ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                  placeholder="Tell us about your business needs..."
                />
                {errors.problemDescription && (
                  <p className="mt-1 text-sm text-red-400">{errors.problemDescription}</p>
                )}
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
              
              <p className="text-sm text-slate-400 text-center mt-4">
                By submitting this form, you agree to our <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;