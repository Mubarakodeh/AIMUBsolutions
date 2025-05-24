import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Layout,
  Code,
  ArrowRight,
  CheckCircle,
  Zap,
  Search,
  Bot,
  Shield,
  Smartphone,
  Clock,
  Users
} from 'lucide-react';

function WebsiteCreation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Professional 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Website Creation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Build your online presence with our professional website development services. From landing pages to full business websites, we create modern, AI-integrated solutions.
            </p>
          </div>

          {/* Service Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link 
              to="/services/website-creation/landing-page" 
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300"
            >
              <Layout className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Landing Pages</h3>
              <p className="text-slate-300 mb-6">High-converting single page websites designed to turn visitors into customers. Perfect for product launches and focused marketing campaigns.</p>
              <div className="flex items-center text-indigo-400">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/website-creation/full-website" 
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <Globe className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Full Websites</h3>
              <p className="text-slate-300 mb-6">Complete business websites with comprehensive features, AI integration, and scalable architecture for growing businesses.</p>
              <div className="flex items-center text-blue-400">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <Bot className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-slate-300">Built-in AI chatbot for enhanced user engagement and support.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <Search className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">SEO Optimized</h3>
              <p className="text-slate-300">Built with search engine optimization best practices.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <Smartphone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Responsive</h3>
              <p className="text-slate-300">Perfect experience across all devices and screen sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">Discovery</h3>
              <p className="text-slate-300">Understanding your needs and planning the perfect solution.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">Design</h3>
              <p className="text-slate-300">Creating beautiful, user-friendly layouts and interfaces.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">Development</h3>
              <p className="text-slate-300">Building your website with modern technologies and AI integration.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">Launch</h3>
              <p className="text-slate-300">Deploying your website and ensuring everything runs perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Tech Startup Website</h3>
                <p className="text-slate-300">Modern website with AI chatbot integration and lead capture.</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
                <p className="text-slate-300">Full-featured online store with AI-powered product recommendations.</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">SaaS Landing Page</h3>
                <p className="text-slate-300">High-converting landing page with integrated lead generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Build Your Website?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Get started with our professional website development services today.
          </p>
          <Link to="/contact-form" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition transform hover:scale-105">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WebsiteCreation;