import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain,
  ArrowRight,
  CheckCircle,
  Bot,
  Code,
  Database,
  Settings,
  Users,
  BarChart3,
  Shield,
  AlertCircle
} from 'lucide-react';

interface FormData {
  businessType: string;
  automationType: string;
  timeline: string;
  budget: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}

function CustomProjects() {
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    automationType: '',
    timeline: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Form validation
      if (!formData.name || !formData.email || !formData.businessType || !formData.description) {
        throw new Error('Please fill in all required fields');
      }

      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to contact form for final steps
      window.location.href = '/contact-form';
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Custom
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't see exactly what you need? Let's build something unique together. Our team specializes in custom AI solutions tailored to your specific requirements.
            </p>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              number="1"
              icon={<Brain className="w-8 h-8 text-blue-400" />}
              title="Discovery"
              description="We analyze your needs and create a detailed project plan."
            />
            <ProcessCard
              number="2"
              icon={<Code className="w-8 h-8 text-purple-400" />}
              title="Development"
              description="Our team builds your custom solution using cutting-edge tech."
            />
            <ProcessCard
              number="3"
              icon={<Bot className="w-8 h-8 text-green-400" />}
              title="Testing"
              description="Rigorous testing ensures everything works perfectly."
            />
            <ProcessCard
              number="4"
              icon={<Settings className="w-8 h-8 text-red-400" />}
              title="Launch"
              description="We deploy your solution and provide ongoing support."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database className="w-8 h-8 text-blue-400" />}
              title="Custom Integration"
              description="Connect with any system or service your business uses."
            />
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="AI Development"
              description="Advanced AI models trained specifically for your needs."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-400" />}
              title="Enterprise Security"
              description="Bank-level security and compliance built-in."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-red-400" />}
              title="Dedicated Team"
              description="Expert developers and project managers at your service."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-yellow-400" />}
              title="Custom Analytics"
              description="Tailored reporting and insights for your business."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8 text-teal-400" />}
              title="Full Control"
              description="Complete customization of every feature and function."
            />
          </div>
        </div>
      </section>

      {/* Project Form Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-700 rounded-xl p-8 border border-slate-600">
            <h2 className="text-3xl font-bold text-white mb-8">Start Your Custom Project</h2>
            
            {submitError && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-200">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-1">
                  Business Type <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., E-commerce, Healthcare, Real Estate"
                  required
                />
              </div>

              <div>
                <label htmlFor="automationType" className="block text-sm font-medium text-slate-300 mb-1">
                  What would you like to automate? <span className="text-red-400">*</span>
                </label>
                <select
                  id="automationType"
                  name="automationType"
                  value={formData.automationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select automation type</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="appointment-scheduling">Appointment Scheduling</option>
                  <option value="data-processing">Data Processing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-1">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-1">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project and what you're trying to achieve..."
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative">
      <div className="absolute -top-3 left-4 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div className="mb-4 mt-2">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

export default CustomProjects;