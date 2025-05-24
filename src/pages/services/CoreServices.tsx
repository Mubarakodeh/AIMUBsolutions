import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Phone, 
  Globe, 
  RefreshCw, 
  Database,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Calendar,
  Target,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  link: string;
}

function CoreServices() {
  const services: ServiceCardProps[] = [
    {
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      title: "AI Booking Assistant",
      description: "Smart scheduling system that handles appointments, reminders, and follow-ups automatically.",
      features: [
        "24/7 appointment booking",
        "Automated reminders & follow-ups",
        "Calendar integration",
        "Custom booking rules",
        "Analytics dashboard"
      ],
      price: "from $297/mo",
      link: "/services/core/ai-booking-assistant"
    },
    {
      icon: <Phone className="w-12 h-12 text-purple-400" />,
      title: "Voice Agent",
      description: "AI-powered call handling for 24/7 phone support and lead capture.",
      features: [
        "Natural voice conversations",
        "Call routing & transcription",
        "Lead qualification",
        "CRM integration",
        "Multi-language support"
      ],
      price: "from $497/mo",
      link: "/services/core/voice-agent"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: "Landing Page Design",
      description: "High-converting landing pages with built-in AI features and analytics.",
      features: [
        "Custom design & development",
        "AI chatbot integration",
        "Lead capture forms",
        "A/B testing",
        "Analytics tracking"
      ],
      price: "from $397",
      link: "/services/core/landing-page"
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-red-400" />,
      title: "Follow-Up Automation",
      description: "Smart email and SMS sequences that nurture leads and close deals.",
      features: [
        "Personalized sequences",
        "Multi-channel follow-up",
        "Behavior-based triggers",
        "Performance analytics",
        "A/B testing"
      ],
      price: "from $347/mo",
      link: "/services/core/follow-up"
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-400" />,
      title: "CRM Setup & Sync",
      description: "Seamless integration of your tools with automated data flow.",
      features: [
        "Custom CRM configuration",
        "Data migration & sync",
        "Workflow automation",
        "Training & documentation",
        "Ongoing support"
      ],
      price: "from $297",
      link: "/services/core/crm-setup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Core
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Modular, pick-and-play solutions perfect for fast automation upgrades. Choose the tools you need and start transforming your business today.
            </p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Why Choose Our Core Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Zap className="w-8 h-8 text-blue-400" />}
              title="Quick Setup"
              description="Get up and running in days, not months"
            />
            <BenefitCard
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              title="Enterprise Security"
              description="Bank-level encryption and compliance"
            />
            <BenefitCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              title="Modular Design"
              description="Choose what you need, scale as you grow"
            />
            <BenefitCard
              icon={<BarChart3 className="w-8 h-8 text-red-400" />}
              title="Clear ROI"
              description="Track and measure your success"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Choose the services you need or let us help you build the perfect automation stack for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-form"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              Schedule a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
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

function ServiceCard({ icon, title, description, features, price, link }: ServiceCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
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
        <span className="text-blue-400 font-semibold">{price}</span>
        <Link 
          to={link}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition"
        >
          Learn More <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default CoreServices;