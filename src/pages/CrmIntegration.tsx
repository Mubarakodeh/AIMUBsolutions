import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Zap, 
  ArrowRight, 
  BarChart3,
  CheckCircle,
  LineChart,
  Settings,
  Users,
  Bot,
  Mail,
  Target,
  RefreshCw,
  Layers
} from 'lucide-react';

function CrmIntegration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Supercharge Your CRM with 
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> AI-Powered Insights & Automation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Integrate AI with your CRM to automate workflows, qualify leads, and enhance customer relationships effortlessly.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                See AI in Action <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">AI CRM Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="text-sm text-slate-400 mb-1">New Leads</div>
                    <div className="text-2xl font-bold text-white">128</div>
                    <div className="text-green-400 text-sm flex items-center gap-1 mt-2">
                      <ArrowRight className="w-3 h-3 rotate-45" /> +24%
                    </div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="text-sm text-slate-400 mb-1">Conversion Rate</div>
                    <div className="text-2xl font-bold text-white">32%</div>
                    <div className="text-green-400 text-sm flex items-center gap-1 mt-2">
                      <ArrowRight className="w-3 h-3 rotate-45" /> +8%
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">Lead Quality Score</div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-white mb-2 flex items-center justify-between">
                    <span>AI Recommendations</span>
                    <RefreshCw className="w-4 h-4 text-purple-400" />
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Follow up with Enterprise leads within 1 hour
                    </li>
                    <li className="text-sm text-slate-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Schedule demo for 5 high-value prospects
                    </li>
                    <li className="text-sm text-slate-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Send personalized email to re-engage dormant accounts
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Animation elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Key Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={<Target className="w-10 h-10 text-purple-400" />}
              title="Smarter Lead Qualification"
              description="AI scores and prioritizes leads for your sales team based on behavior and engagement."
            />
            <BenefitCard 
              icon={<Mail className="w-10 h-10 text-blue-400" />}
              title="Automated Follow-Ups"
              description="Never miss a lead with AI-driven email & messaging automation at the perfect time."
            />
            <BenefitCard 
              icon={<Layers className="w-10 h-10 text-green-400" />}
              title="Seamless Integration"
              description="Works with Salesforce, HubSpot, Zoho, and other popular CRM platforms."
            />
            <BenefitCard 
              icon={<BarChart3 className="w-10 h-10 text-red-400" />}
              title="Data-Driven Decisions"
              description="AI analyzes customer interactions to optimize outreach and improve conversion."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Connect Your CRM"
              description="Easy setup with no coding required. We integrate with your existing CRM system in minutes."
              icon={<Database className="w-12 h-12 text-purple-400" />}
            />
            <StepCard
              number="2"
              title="AI Analyzes & Automates"
              description="Our AI engine tracks interactions, identifies patterns, and optimizes your sales process."
              icon={<Bot className="w-12 h-12 text-blue-400" />}
            />
            <StepCard
              number="3"
              title="Boost Sales Performance"
              description="AI delivers actionable insights to help your team close more deals faster."
              icon={<LineChart className="w-12 h-12 text-green-400" />}
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MetricCard
              value="99.9%"
              label="Data Accuracy"
              description="Eliminate manual entry errors and ensure data consistency"
            />
            <MetricCard
              value="15hrs/week"
              label="Time Saved"
              description="Automate repetitive tasks and focus on high-value activities"
            />
            <MetricCard
              value="45%"
              label="ROI Increase"
              description="Higher conversion rates and improved customer retention"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard
              company="TechSolutions Inc."
              industry="SaaS"
              results={[
                "40% increase in lead conversion rates",
                "65% reduction in manual data entry",
                "28% improvement in customer retention"
              ]}
              quote="Our AI-powered CRM integration boosted lead conversion rates by 40% in just 3 months! The automated lead scoring has transformed how our sales team prioritizes prospects."
              person="Jennifer Lee, VP of Sales"
            />
            <CaseStudyCard
              company="Global Manufacturing Co."
              industry="Manufacturing"
              results={[
                "3x increase in qualified leads",
                "52% faster sales cycle",
                "$1.2M additional revenue in first year"
              ]}
              quote="The AI insights helped us identify patterns we never would have seen. We've been able to predict customer needs before they even reach out to us."
              person="Robert Chen, Director of Business Development"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Advanced Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<WorkflowIcon className="w-8 h-8 text-purple-400" />}
              title="Custom Workflows"
              description="Create automated sequences based on customer behavior and engagement."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-400" />}
              title="Real-time Sync"
              description="Bi-directional data flow ensures your CRM is always up-to-date."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              title="Smart Lead Scoring"
              description="AI-powered lead scoring helps prioritize your most promising prospects."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8 text-red-400" />}
              title="Easy Configuration"
              description="No-code setup and customization to match your unique business needs."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-yellow-400" />}
              title="Advanced Analytics"
              description="Comprehensive dashboards with actionable insights and forecasting."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-teal-400" />}
              title="Team Collaboration"
              description="Streamline communication and share insights across your organization."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Upgrade Your CRM with AI Today!</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join leading companies that have transformed their sales process with our AI-powered CRM integration.
          </p>
          <Link to="/contact-form" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition transform hover:scale-105 w-fit">
            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
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
      className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 opacity-0 translate-y-4 hover:translate-y-[-4px]"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, icon }) {
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
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function MetricCard({ value, label, description }) {
  const cardRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          if (valueRef.current) {
            valueRef.current.classList.add('animate-pulse');
          }
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
      className="p-8 bg-slate-700 rounded-xl text-center opacity-0 translate-y-4 transition-all duration-300"
    >
      <div ref={valueRef} className="text-5xl font-bold text-purple-400 mb-2">{value}</div>
      <div className="text-xl font-semibold text-white mb-4">{label}</div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function CaseStudyCard({ company, industry, results, quote, person }) {
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
      className="p-8 bg-slate-700 rounded-xl border border-slate-600 opacity-0 translate-y-4 transition-all duration-300"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white mb-1">{company}</h3>
        <p className="text-purple-400">{industry}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-300">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-slate-600 pt-6">
        <p className="text-slate-300 italic mb-4">"{quote}"</p>
        <p className="text-white font-semibold">{person}</p>
      </div>
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
      className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 opacity-0 translate-y-4"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function WorkflowIcon(props) {
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
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

export default CrmIntegration;