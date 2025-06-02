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
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
            <h1 className="text-5xl font-bold text-white mb-6">Schedule Your Free Consultation</h1>
            <p className="text-xl text-slate-300 mb-12">
              Discuss your business needs and learn how AI automation can help, with a 7-day risk-free trial after setup.
            </p>
            <div className="calendly-inline-widget" data-url="https://calendly.com/aimubsolutions/demo-call" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
      </div>
  );
};

export default ContactForm;