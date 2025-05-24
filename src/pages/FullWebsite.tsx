import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  ArrowRight, 
  Smartphone,
  Search,
  BarChart3,
  Bot,
  LineChart,
  CheckCircle,
  Code,
  Layout,
  Rocket,
  Layers,
  Settings,
  Shield
} from 'lucide-react';

function FullWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Custom 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Website Development</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Get a professional, full-featured website built with modern technology and designed for your business needs. Complete with AI integration and analytics.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Start Your Website Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Website Preview</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-8 bg-blue-500/20 rounded-lg w-32"></div>
                      <div className="flex gap-4">
                        <div className="h-4 bg-slate-600 rounded w-16"></div>
                        <div className="h-4 bg-slate-600 rounded w-16"></div>
                        <div className="h-4 bg-slate-600 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="h-40 bg-slate-600 rounded-lg mb-4"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-slate-600 rounded-lg"></div>
                      <div className="h-24 bg-slate-600 rounded-lg"></div>
                      <div className="h-24 bg-slate-600 rounded-lg"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 bg-slate-700 p-4 rounded-lg h-32"></div>
                    <div className="flex-1 bg-slate-700 p-4 rounded-lg h-32"></div>
                  </div>
                  
                  <div className="bg-blue-500/20 p-6 rounded-lg">
                    <div className="h-6 bg-blue-500 rounded-lg w-1/4 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Animation elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Layout className="w-8 h-8 text-blue-400" />}
              title="Custom Design"
              description="Unique design that perfectly matches your brand and business goals."
            />
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="AI Integration"
              description="Built-in AI Assistant for enhanced user engagement and support."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-400" />}
              title="Security First"
              description="Enterprise-grade security to protect your website and data."
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-red-400" />}
              title="Mobile Responsive"
              description="Perfect experience across all devices and screen sizes."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 text-yellow-400" />}
              title="SEO Optimized"
              description="Built with search engine optimization best practices."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-teal-400" />}
              title="Analytics"
              description="Comprehensive insights into website performance and user behavior."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Development Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">One-Time Setup</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Custom Design & Development</p>
                    <p className="text-slate-300">Complete website built to your specifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Domain & Hosting Setup</p>
                    <p className="text-slate-300">Professional hosting configuration included</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Training & Documentation</p>
                    <p className="text-slate-300">Learn how to manage your new website</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Retainer Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Regular Updates</p>
                    <p className="text-slate-300">Keep your website current and secure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Performance Optimization</p>
                    <p className="text-slate-300">Continuous improvement of speed and SEO</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Technical Support</p>
                    <p className="text-slate-300">Expert help when you need it</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              number="1"
              icon={<Layout className="w-8 h-8 text-blue-400" />}
              title="Planning"
              description="We analyze your needs and create a detailed development plan."
            />
            <ProcessCard
              number="2"
              icon={<Code className="w-8 h-8 text-purple-400" />}
              title="Development"
              description="Our team builds your website using modern technologies."
            />
            <ProcessCard
              number="3"
              icon={<Settings className="w-8 h-8 text-green-400" />}
              title="Testing"
              description="Rigorous testing ensures everything works perfectly."
            />
            <ProcessCard
              number="4"
              icon={<Rocket className="w-8 h-8 text-red-400" />}
              title="Launch"
              description="Your website goes live with our full support."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Build Your Website?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Get a professional website that grows your business and impresses your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 opacity-0 translate-y-4"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function ProcessCard({ number, icon, title, description }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-8 bg-slate-700 rounded-xl text-center relative opacity-0 translate-y-4 transition-all duration-300"
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

export default FullWebsite;