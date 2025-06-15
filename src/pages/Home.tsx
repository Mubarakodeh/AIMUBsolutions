import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Target, 
  Users,
  Globe,
  Zap,
  Shield,
  BarChart3,
  CheckCircle,
  Brain,
  Wrench,
  Home as HomeIcon,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Landmark,
  Building2,
  Settings,
  Plus,
  Puzzle
} from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Automate Smarter.
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Grow Faster. Risk-Free.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Schedule a free consultation to discover how AI-powered systems can transform your business, with a 7-day risk-free trial after setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
                  Our Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact-form" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                  Schedule Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">AI Assistant Demo</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 rounded-tl-none">
                      <p className="text-white">Hello! I'm your AI assistant. How can I help you today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 justify-end">
                    <div className="bg-blue-500/20 rounded-lg p-4 rounded-tr-none">
                      <p className="text-blue-300">I need help automating my customer support.</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-slate-300" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 rounded-tl-none">
                      <p className="text-white">I can help with that! Our AI solutions can automate up to 80% of customer inquiries, provide 24/7 support, and seamlessly integrate with your existing systems.</p>
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

      {/* What We Offer Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <Bot className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Core Services</h3>
              <p className="text-slate-300 mb-6">Essential AI tools for lead gen, follow-up & support</p>
              <Link 
                to="/services/core"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <Plus className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Add-Ons</h3>
              <p className="text-slate-300 mb-6">Powerful upgrades for your automation stack</p>
              <Link 
                to="/services/add-ons"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <Puzzle className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Industry Bundles</h3>
              <p className="text-slate-300 mb-6">Pre-built flows for your specific niche</p>
              <Link 
                to="/services/bundles"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300">
              <Brain className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Custom Projects</h3>
              <p className="text-slate-300 mb-6">Built from scratch for your unique needs</p>
              <Link 
                to="/services/custom"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <Brain className="w-12 h-12 text-blue-400 mb-6" /> 
              <h3 className="text-2xl font-bold text-white mb-4">Schedule a Free Consultation</h3>
              <p className="text-slate-300">Book a call to discuss your needs and discover how AI can transform your business.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <Settings className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">We Build Your AI Assistant</h3>
              <p className="text-slate-300">After the call, we'll build an AI assistant tailored specifically to your business needs.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <BarChart3 className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Experience 7 Days Risk-Free</h3>
              <p className="text-slate-300">Once your assistant is set up, try it risk-free for 7 days and see the results firsthand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Link to="/services/bundles/hvac" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <Wrench className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Home Services</h3>
              <p className="text-slate-300">HVAC, plumbing, electrical, and more</p>
            </Link>
            
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <Target className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
              <p className="text-slate-300">AI-powered lead capture and qualification</p>
              <Link 
                to="/lead-generation"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <Link to="/services/bundles/ecommerce" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <ShoppingBag className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
              <p className="text-slate-300">Online stores and digital retail</p>
            </Link>
            
            <Link to="/services/bundles/medical" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300">
              <Stethoscope className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Medical</h3>
              <p className="text-slate-300">Clinics and healthcare providers</p>
            </Link>
            
            <Link to="/services/bundles" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300">
              <GraduationCap className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-slate-300">Schools and training providers</p>
            </Link>
            
            <Link to="/services/bundles" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-teal-500 transition-all duration-300">
              <Landmark className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Finance</h3>
              <p className="text-slate-300">Financial services and consulting</p>
            </Link>
            
            <Link to="/services/bundles" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300">
              <Building2 className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Hospitality</h3>
              <p className="text-slate-300">Hotels, restaurants, and venues</p>
            </Link>
            
            <Link to="/industries" className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-2">View All Industries</p>
                <ArrowRight className="w-6 h-6 text-blue-400 mx-auto" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose AI MUB</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Zap className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Fast Setup</h3>
              <p className="text-slate-300">Launch in days, not months. Our streamlined process gets you up and running quickly.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Shield className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-slate-300">Bank-level encryption and compliance built into every solution we deliver.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Settings className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Full Control</h3>
              <p className="text-slate-300">Choose between DIY setup with our support or fully managed service.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Target className="w-10 h-10 text-red-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-slate-300">From solopreneurs to enterprise, our solutions grow with your business.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Users className="w-10 h-10 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-slate-300">Always-on help and proactive monitoring to ensure your success.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <BarChart3 className="w-10 h-10 text-teal-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Clear ROI</h3>
              <p className="text-slate-300">Track and measure the impact of automation on your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Real Results</h2>
            <p className="text-xl text-slate-300">See what our clients achieve with AI MUB</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-xl font-semibold text-white mb-4">Time Saved</div>
              <p className="text-slate-300">Average time saved per client with our automation</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-xl font-semibold text-white mb-4">More Leads</div>
              <p className="text-slate-300">Increase in qualified leads from automated follow-up</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-xl font-semibold text-white mb-4">Service Uptime</div>
              <p className="text-slate-300">Continuous operation through AI automation</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link to="/testimonials" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business Risk-Free?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Schedule a free consultation today to see how AI automation can revolutionize your business operations, with a 7-day risk-free trial after setup.
          </p>
          <Link 
            to="/contact-form"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition transform hover:scale-105"
          >
            Schedule My Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;