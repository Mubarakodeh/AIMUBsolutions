import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  ArrowRight, 
  Users,
  BarChart3,
  Bot,
  LineChart,
  CheckCircle,
  Database,
  MessageSquare
} from 'lucide-react';

function LeadCapture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Intelligent 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Lead Capture</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Convert more visitors into qualified leads with our AI-powered lead capture system. Engage prospects 24/7 and gather valuable insights automatically.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Start Capturing Leads <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Lead Capture Demo</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Lead Qualification</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="text-slate-300">Budget Match</div>
                        <div className="ml-auto text-green-400">95%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="text-slate-300">Need Match</div>
                        <div className="ml-auto text-green-400">88%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="text-slate-300">Timeline Match</div>
                        <div className="ml-auto text-yellow-400">75%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Lead Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                        Schedule Follow-up
                      </button>
                      <button className="w-full px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition">
                        Send Information
                      </button>
                      <button className="w-full px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition">
                        Assign to Sales
                      </button>
                    </div>
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
              icon={<Bot className="w-8 h-8 text-blue-400" />}
              title="AI-Powered Qualification"
              description="Our AI automatically qualifies leads based on behavior, engagement, and responses."
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-purple-400" />}
              title="Smart Conversations"
              description="Dynamic conversation flows adapt based on prospect responses and interests."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-green-400" />}
              title="CRM Integration"
              description="Seamlessly sync lead data with your existing CRM system in real-time."
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-red-400" />}
              title="Analytics Dashboard"
              description="Track conversion rates, lead quality, and engagement metrics."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-yellow-400" />}
              title="Lead Routing"
              description="Automatically route qualified leads to the right sales team members."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-teal-400" />}
              title="Performance Insights"
              description="Get actionable insights to optimize your lead generation process."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our Lead Capture</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Increased Efficiency</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">24/7 Lead Capture</p>
                    <p className="text-slate-300">Never miss a potential lead with round-the-clock automated capture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Instant Qualification</p>
                    <p className="text-slate-300">AI automatically qualifies leads based on your criteria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Smart Follow-up</p>
                    <p className="text-slate-300">Automated follow-up sequences based on lead behavior</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Better Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Higher Conversion Rates</p>
                    <p className="text-slate-300">Convert more visitors into qualified leads</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Quality Insights</p>
                    <p className="text-slate-300">Detailed analytics to optimize your lead generation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Seamless Integration</p>
                    <p className="text-slate-300">Works with your existing tools and workflows</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Capture More Leads?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Start converting more visitors into qualified leads with our AI-powered lead capture system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Get Started <ArrowRight className="w-5 h-5" />
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

export default LeadCapture;