import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain,
  BarChart3,
  Server,
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  Shield,
  Bot,
  Code,
  Settings,
  Database
} from 'lucide-react';

interface AddOnCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  setupTime: string;
  recommended?: boolean;
}

function AddOns() {
  const addOns: AddOnCardProps[] = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "Custom AI Prompt Design",
      description: "Tailored AI responses and behaviors designed specifically for your business needs.",
      features: [
        "Custom conversation flows",
        "Industry-specific knowledge",
        "Personality matching",
        "Multi-language support",
        "Regular updates & refinements"
      ],
      price: "+$99",
      setupTime: "2-3 days",
      recommended: true
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
      title: "Analytics Dashboard",
      description: "Custom reporting dashboard for tracking key metrics and business insights.",
      features: [
        "Real-time data visualization",
        "Custom KPI tracking",
        "Automated reports",
        "Performance alerts",
        "Data export options"
      ],
      price: "+$147",
      setupTime: "3-4 days"
    },
    {
      icon: <Server className="w-12 h-12 text-green-400" />,
      title: "Hosting Setup & Config",
      description: "Professional hosting configuration and ongoing management for optimal performance.",
      features: [
        "Server configuration",
        "SSL certificate setup",
        "Performance optimization",
        "Security hardening",
        "24/7 monitoring"
      ],
      price: "+$197",
      setupTime: "1-2 days"
    },
    {
      icon: <FileText className="w-12 h-12 text-red-400" />,
      title: "Content Generator",
      description: "AI-powered content creation for blogs, emails, and marketing materials.",
      features: [
        "Blog post generation",
        "Email sequence writing",
        "Social media content",
        "SEO optimization",
        "Brand voice matching"
      ],
      price: "+$197",
      setupTime: "2-3 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Power-Up Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Solution</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enhance your setup with these powerful extras. Each add-on is designed to integrate seamlessly with our core services.
            </p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Why Add These Features?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Zap className="w-8 h-8 text-blue-400" />}
              title="Enhanced Performance"
              description="Boost your solution's capabilities"
            />
            <BenefitCard
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="Smarter AI"
              description="More intelligent and capable systems"
            />
            <BenefitCard
              icon={<Code className="w-8 h-8 text-green-400" />}
              title="Easy Integration"
              description="Seamless addition to existing setup"
            />
            <BenefitCard
              icon={<Settings className="w-8 h-8 text-red-400" />}
              title="Full Customization"
              description="Tailored to your specific needs"
            />
          </div>
        </div>
      </section>

      {/* Add-Ons Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <AddOnCard key={index} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-700 rounded-xl p-8 border border-slate-600">
            <div className="md:flex items-start gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Database className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Seamless Integration</h3>
                <p className="text-slate-300">
                  All add-ons are designed to work perfectly with our core services. Add them anytime to enhance your solution.
                </p>
              </div>
              <div className="md:w-2/3 grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Easy Setup</h4>
                  <p className="text-slate-300">Quick implementation with minimal disruption to your existing workflow.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Flexible Pricing</h4>
                  <p className="text-slate-300">Add or remove features as needed. Only pay for what you use.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Full Support</h4>
                  <p className="text-slate-300">Dedicated assistance for setup and ongoing maintenance.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Regular Updates</h4>
                  <p className="text-slate-300">Continuous improvements and new features added regularly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Enhance Your Solution?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Let's discuss which add-ons will best serve your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-form"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function AddOnCard({ icon, title, description, features, price, setupTime, recommended }: AddOnCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 relative">
      {recommended && (
        <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Recommended
        </div>
      )}
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Features:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-300">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-blue-400 font-semibold block">{price}</span>
          <span className="text-slate-400 text-sm">Setup: {setupTime}</span>
        </div>
        <Link 
          to="/contact-form"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition"
        >
          Add This <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default AddOns;