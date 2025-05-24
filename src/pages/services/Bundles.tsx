import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench,
  Home,
  ShoppingBag,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Bot,
  MessageSquare,
  Calendar,
  Target,
  Mail,
  Users,
  BarChart3,
  Shield
} from 'lucide-react';

interface BundleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  pricing: {
    diy: string;
    managed: string;
  };
  recommended?: boolean;
}

function Bundles() {
  const bundles: BundleCardProps[] = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-400" />,
      title: "HVAC & Home Services",
      description: "Capture more leads, follow up automatically, and book more jobs with zero extra admin.",
      painPoints: [
        "Missed calls = lost leads",
        "No after-hours support",
        "No lead tracking"
      ],
      solutions: [
        "24/7 virtual assistant for calls/chats",
        "Auto SMS/email follow-up",
        "Lead dashboard included"
      ],
      pricing: {
        diy: "$1,500+ setup • $197/mo",
        managed: "$697/mo (no setup fee)"
      },
      recommended: true
    },
    {
      icon: <Home className="w-12 h-12 text-purple-400" />,
      title: "Real Estate Agents",
      description: "Automate inquiries, qualify leads, and book more showings—without lifting a finger.",
      painPoints: [
        "Time wasted on low-quality leads",
        "Missed open house inquiries",
        "Poor follow-up flow"
      ],
      solutions: [
        "24/7 chatbot for property questions",
        "Open house reminders + lead scoring",
        "Email + SMS nurturing"
      ],
      pricing: {
        diy: "$1,800+ setup • $247/mo",
        managed: "$797/mo"
      }
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-green-400" />,
      title: "E-commerce Brands",
      description: "Recover carts, scale product content, and boost retention with smart automation.",
      painPoints: [
        "Cart abandonment",
        "Time-consuming content",
        "Slow customer support"
      ],
      solutions: [
        "Personalized abandoned cart recovery",
        "AI product description + blog content",
        "Embedded chat support agent"
      ],
      pricing: {
        diy: "$1,500+ setup • $297/mo",
        managed: "$897/mo"
      }
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-red-400" />,
      title: "Medical Clinics",
      description: "Reduce no-shows, simplify scheduling, and automate patient follow-up with ease.",
      painPoints: [
        "High no-show rate",
        "Overloaded front desk",
        "Manual follow-up"
      ],
      solutions: [
        "Voice & SMS appointment reminders",
        "Automated intake forms + confirmations",
        "Easy scheduling for patients"
      ],
      pricing: {
        diy: "$2,000+ setup • $297/mo",
        managed: "$997/mo"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Industry
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Bundles</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete automation stacks tailored to your industry. Get everything you need to transform your business operations.
            </p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Included in Every Bundle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Bot className="w-8 h-8 text-blue-400" />}
              title="AI Assistant"
              description="24/7 automated support and lead capture"
            />
            <BenefitCard
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              title="Enterprise Security"
              description="Bank-level data protection"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8 text-green-400" />}
              title="Dedicated Support"
              description="Expert help whenever you need it"
            />
            <BenefitCard
              icon={<BarChart3 className="w-8 h-8 text-red-400" />}
              title="Analytics Dashboard"
              description="Track ROI and performance"
            />
          </div>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((bundle, index) => (
              <BundleCard key={index} {...bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Bundle Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-blue-400" />}
              title="AI Chat Support"
              description="Intelligent chatbot that handles inquiries 24/7 and routes complex issues to your team."
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-purple-400" />}
              title="Smart Scheduling"
              description="Automated appointment booking with reminders and follow-ups."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              title="Lead Capture"
              description="AI-powered lead qualification and nurturing system."
            />
            <FeatureCard
              icon={<Mail className="w-8 h-8 text-red-400" />}
              title="Email Automation"
              description="Personalized follow-up sequences that convert leads into customers."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-yellow-400" />}
              title="Team Training"
              description="Comprehensive onboarding and ongoing support for your team."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-teal-400" />}
              title="Performance Analytics"
              description="Detailed insights and reporting on all automation metrics."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Get started with our industry-specific automation bundles today.
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function BundleCard({ icon, title, description, painPoints, solutions, pricing, recommended }: BundleCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 relative">
      {recommended && (
        <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Pain Points We Solve:</h4>
        <ul className="space-y-3">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-300">
              <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Our Solution:</h4>
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-300">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              {solution}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Pricing Options:</h4>
        <div className="space-y-3">
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-medium">DIY Setup + Support</p>
            <p className="text-slate-300">{pricing.diy}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-medium">Fully Managed</p>
            <p className="text-slate-300">{pricing.managed}</p>
          </div>
        </div>
      </div>
      
      <Link 
        to="/contact-form"
        className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
      >
        Get Started <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Bundles;