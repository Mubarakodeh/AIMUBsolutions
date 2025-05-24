import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  ArrowRight, 
  Search,
  Mail,
  Database,
  RefreshCw,
  Bot,
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Zap,
  MessageSquare,
  LineChart,
  Brain,
  Settings
} from 'lucide-react';

function LeadGeneration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Supercharge Your Sales with 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI-Driven Lead Generation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Automate your lead outreach, personalize your emails, and follow up seamlessly — all with AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                  Schedule Demo <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Lead Generation Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <div className="text-sm text-slate-300">New Leads</div>
                      <div className="text-2xl font-bold text-blue-400">128</div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <ArrowRight className="w-4 h-4 rotate-45" />
                        +24%
                      </div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <div className="text-sm text-slate-300">Response Rate</div>
                      <div className="text-2xl font-bold text-green-400">32%</div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <ArrowRight className="w-4 h-4 rotate-45" />
                        +8%
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Lead Quality Score</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Match Score</span>
                          <span className="text-green-400">95%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Engagement</span>
                          <span className="text-blue-400">88%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{width: '88%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Response Rate</span>
                          <span className="text-purple-400">75%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-purple-400 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
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

      {/* How It Works Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <Search className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Scraping Leads</h3>
              <p className="text-slate-300">We start by scraping through a targeted list of potential leads based on your criteria.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <Mail className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Personalized Outreach</h3>
              <p className="text-slate-300">Our AI generates personalized emails tailored to each lead, making your outreach feel individualized.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <Database className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">CRM Integration</h3>
              <p className="text-slate-300">Responding leads are automatically added to your CRM database for easy management.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <RefreshCw className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Follow-ups</h3>
              <p className="text-slate-300">Smart follow-up sequences ensure no lead falls through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Lead Generation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Automated Lead Generation</p>
                    <p className="text-slate-300">AI scours through your target list to find the best prospects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Personalized Email Outreach</p>
                    <p className="text-slate-300">Each lead gets a tailored email crafted for maximum engagement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Smart Lead Scoring</p>
                    <p className="text-slate-300">AI-powered qualification ensures you focus on the best opportunities</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Automation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">CRM Integration</p>
                    <p className="text-slate-300">Seamless integration with your existing CRM system</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Intelligent Follow-ups</p>
                    <p className="text-slate-300">Automated, personalized follow-up sequences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Performance Analytics</p>
                    <p className="text-slate-300">Detailed insights and reporting on campaign performance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Client" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">Michael Chen</p>
                  <p className="text-slate-400">VP of Sales, TechCorp</p>
                </div>
              </div>
              <p className="text-slate-300 italic mb-4">
                "With AI MUB's system, our sales pipeline has become more efficient, with automated follow-ups leading to a higher conversion rate. We've seen a 40% increase in qualified leads."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Client" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-slate-400">Marketing Director, Global Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 italic mb-4">
                "The personalized emails AI MUB generates have allowed us to connect with leads in a way we never could before. Our response rates have doubled since implementation."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join leading companies that have revolutionized their sales process with our AI-powered lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Schedule Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Star(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="inherit"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default LeadGeneration;