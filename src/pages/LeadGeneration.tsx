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
                Done-For-You 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Lead Generation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Get real leads, enriched and delivered — daily, weekly, or on-demand. Our custom lead generation system finds and qualifies prospects so you can focus on closing deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                  Book Strategy Call <ArrowRight className="w-5 h-5" />
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
              <h3 className="text-xl font-bold text-white mb-4">Target Selection</h3>
              <p className="text-slate-300">Choose your ideal customer based on industry, role, location, or profile.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <Database className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Data Collection</h3>
              <p className="text-slate-300">Pull real lead data from platforms like business directories, social media, or listing sites.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <Shield className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Enrichment & Filtering</h3>
              <p className="text-slate-300">Clean, validate, and enhance the lead list with contact info and filters.</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <RefreshCw className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Delivery & Activation</h3>
              <p className="text-slate-300">Automatically send leads to your CRM, email campaigns, or spreadsheets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-green-400" />}
              title="Verified Contact Info"
              description="Every lead comes with validated email addresses and phone numbers."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-400" />}
              title="Delivered in Bulk or Real-Time"
              description="Get leads delivered on your schedule - daily, weekly, or instantly."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-purple-400" />}
              title="CRM & Campaign Ready"
              description="Leads are formatted and ready for immediate import into your systems."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8 text-red-400" />}
              title="Built 100% Custom to Your Industry"
              description="Tailored lead generation strategies specific to your business needs."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industries We've Served</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <IndustryCard
              icon={<HomeIcon className="w-10 h-10 text-blue-400" />}
              title="Home Services"
              description="HVAC, plumbing, electrical contractors"
            />
            <IndustryCard
              icon={<BuildingIcon className="w-10 h-10 text-purple-400" />}
              title="Real Estate"
              description="Agents, brokers, property managers"
            />
            <IndustryCard
              icon={<Brain className="w-10 h-10 text-green-400" />}
              title="SaaS & Agencies"
              description="Software companies and marketing agencies"
            />
            <IndustryCard
              icon={<TruckIcon className="w-10 h-10 text-red-400" />}
              title="Logistics"
              description="Shipping, freight, transportation"
            />
            <IndustryCard
              icon={<Users className="w-10 h-10 text-yellow-400" />}
              title="Coaches / Local Businesses"
              description="Consultants, trainers, local services"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1,000+</div>
              <div className="text-xl font-semibold text-white mb-4">Leads Scraped Daily</div>
              <p className="text-slate-300">High-volume lead generation across multiple industries</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%+</div>
              <div className="text-xl font-semibold text-white mb-4">Email Deliverability</div>
              <p className="text-slate-300">Verified contact information with high accuracy rates</p>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40+</div>
              <div className="text-xl font-semibold text-white mb-4">Hours/Month Saved</div>
              <p className="text-slate-300">Time saved on manual prospecting and lead research</p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-slate-700 rounded-xl p-8 md:p-12 border border-slate-600 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-2xl text-slate-300 italic mb-8">
              "AI MUB's lead generation system has completely transformed our sales pipeline. We went from manually searching for prospects to having qualified leads delivered daily. Our conversion rate increased by 40% in just 3 months."
            </p>
            <div>
              <p className="text-white font-semibold text-xl">Sarah Johnson</p>
              <p className="text-slate-400">VP of Sales, TechCorp Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Build Your Lead Engine</h2>
          <p className="text-xl text-slate-300 mb-12">
            Stop wasting time on manual prospecting. Get a custom lead generation system that delivers qualified prospects directly to your pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Start Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Request Demo <ArrowRight className="w-5 h-5" />
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

function IndustryCard({ icon, title, description }) {
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
      className="p-6 bg-slate-700 rounded-xl border border-slate-600 text-center opacity-0 translate-y-4 transition-all duration-300 hover:border-blue-500"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}

// Custom icons
function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
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