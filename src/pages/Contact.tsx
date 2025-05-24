import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar, 
  Database,
  Bot,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Target,
  Globe
} from 'lucide-react';
import { submitToAirtable } from '../lib/airtable';
import { sendToWebhook } from '../lib/webhook';
import { FormSubmission } from '../types/formSubmission';

interface ServiceButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ServiceButton({ icon, title, description, color }: ServiceButtonProps) {
  const colorClasses = {
    blue: 'hover:border-blue-500 hover:bg-blue-500/5',
    purple: 'hover:border-purple-500 hover:bg-purple-500/5',
    green: 'hover:border-green-500 hover:bg-green-500/5'
  };

  const getServiceLink = (title: string) => {
    switch (title.toLowerCase()) {
      case 'ai assistant':
        return '/ai-assistant';
      case 'lead generation':
        return '/lead-generation';
      case 'website creation':
        return '/website-creation';
      default:
        return '/';
    }
  };

  return (
    <Link 
      to={getServiceLink(title)}
      className={`block p-4 bg-slate-700 rounded-lg border border-slate-600 transition-all duration-300 ${colorClasses[color] || colorClasses.blue}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h4 className="text-white font-medium">{title}</h4>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'Core Services'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.message || !formData.interest) {
      setSubmitError('Please fill in all required fields');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const submission: FormSubmission = {
        full_name: formData.name,
        email: formData.email,
        service: formData.interest,
        company_name: formData.company,
        problem_description: formData.message,
        additional_info: null
      };
      
      await submitToAirtable(submission, 'Demo Form');

      sendToWebhook(submission).catch(err => {
        console.warn('Webhook notification failed, but form was submitted successfully:', err);
      });
      
      console.log('Contact form submitted successfully to Airtable and webhook');
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'Core Services'
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Want to See How Many Leads You're Missing?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Book a free demo to see exactly how our AI systems can transform your business.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-300">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-200">{submitError}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Business Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-1">
                      Service <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="Core Services">Core Services</option>
                      <option value="Add-Ons">Add-Ons</option>
                      <option value="Industry Bundles">Industry Bundles</option>
                      <option value="Custom Project">Custom Project</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your business needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Schedule Free Demo'} 
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-slate-300 mb-1">For general inquiries:</p>
                    <a href="mailto:info@aimub.com" className="text-blue-400 hover:text-blue-300 transition">
                      info@aimub.com
                    </a>
                    <p className="text-slate-300 mb-1 mt-3">For support:</p>
                    <a href="mailto:support@aimub.com" className="text-blue-400 hover:text-blue-300 transition">
                      support@aimub.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-slate-300 mb-1">Main Office:</p>
                    <a href="tel:+1-800-AI-SOLUTIONS" className="text-blue-400 hover:text-blue-300 transition">
                      +1-800-AI-SOLUTIONS
                    </a>
                    <p className="text-slate-300 mb-1 mt-3">Customer Support:</p>
                    <a href="tel:+1-800-AI-SUPPORT" className="text-blue-400 hover:text-blue-300 transition">
                      +1-800-AI-SUPPORT
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-slate-300">
                      AI MUB Headquarters<br />
                      123 Innovation Drive<br />
                      Tech District, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ServiceButton
                    icon={<Bot className="w-5 h-5 text-blue-400" />}
                    title="AI Assistant"
                    description="Intelligent automation for customer support and engagement"
                    color="blue"
                  />
                  <ServiceButton
                    icon={<Target className="w-5 h-5 text-purple-400" />}
                    title="Lead Generation"
                    description="AI-powered lead capture and qualification"
                    color="purple"
                  />
                  <ServiceButton
                    icon={<Globe className="w-5 h-5 text-green-400" />}
                    title="Website Creation"
                    description="Professional websites with AI integration"
                    color="green"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <FaqItem
              question="How quickly can AI MUB solutions be implemented?"
              answer="Most of our AI solutions can be implemented within 1-2 weeks, with some simpler integrations taking as little as 2-3 days. Our team works efficiently to ensure minimal disruption to your operations during the implementation process."
            />
            <FaqItem
              question="Do I need technical expertise to use your AI solutions?"
              answer="No technical expertise is required. Our solutions are designed to be user-friendly and intuitive. We provide comprehensive training and ongoing support to ensure your team can easily manage and benefit from our AI systems."
            />
            <FaqItem
              question="How secure is my business data with your AI solutions?"
              answer="We implement bank-level encryption and security protocols to protect your data. Our systems are compliant with GDPR, HIPAA, and other relevant regulations. We never share your data with third parties without explicit permission."
            />
            <FaqItem
              question="Can your AI solutions integrate with our existing systems?"
              answer="Yes, our AI solutions are designed to integrate seamlessly with most popular business systems and platforms. We have pre-built integrations for major CRM systems, scheduling tools, and customer support platforms."
            />
            <FaqItem
              question="What kind of ROI can I expect from implementing your AI solutions?"
              answer="While results vary by industry and use case, our clients typically see ROI within 3-6 months. Common results include 30-70% reduction in response times, 40% increase in conversion rates, and 15+ hours saved per week on administrative tasks."
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join the AI revolution and stay ahead of the competition.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-700 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;