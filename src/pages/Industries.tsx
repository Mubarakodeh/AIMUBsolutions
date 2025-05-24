import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench,
  Home,
  Building2,
  ShoppingBag,
  Stethoscope,
  CheckCircle,
  Bot
} from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  painPoints: string[];
  solutions: string[];
  pricing: {
    diy: string;
    managed: string;
  };
  ctaText: string;
  ctaLink: string;
}

function Industries() {
  const industries: IndustryCardProps[] = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-400" />,
      title: "HVAC & Home Services",
      summary: "Capture more leads, follow up automatically, and book more jobs with zero extra admin.",
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
      ctaText: "Book Free Demo",
      ctaLink: "/contact-form"
    },
    {
      icon: <Home className="w-12 h-12 text-purple-400" />,
      title: "Real Estate Agents",
      summary: "Automate inquiries, qualify leads, and book more showings—without lifting a finger.",
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
      },
      ctaText: "Preview Assistant Flow",
      ctaLink: "/contact-form"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-green-400" />,
      title: "E-commerce Brands",
      summary: "Recover carts, scale product content, and boost retention with smart automation.",
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
      },
      ctaText: "Try Product Generator Demo",
      ctaLink: "/contact-form"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-red-400" />,
      title: "Medical Clinics",
      summary: "Reduce no-shows, simplify scheduling, and automate patient follow-up with ease.",
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
      },
      ctaText: "See Appointment Flow",
      ctaLink: "/contact-form"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Industries We 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Tailored AI solutions for your industry's unique challenges. Select your industry to see how we can help.
          </p>
        </div>
      </header>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Not sure which solution fits your business?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Let's explore how our AI solutions can address your specific business challenges.
          </p>
          <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition transform hover:scale-105">
            Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function IndustryCard({ icon, title, summary, painPoints, solutions, pricing, ctaText, ctaLink }: IndustryCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 mb-6">{summary}</p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-6"
      >
        {isExpanded ? 'Show Less' : 'Learn More'} <ArrowRight className="w-5 h-5" />
      </button>
      
      {isExpanded && (
        <div className="space-y-6 animate-fadeInUp">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Pain Points</h4>
            <ul className="space-y-2">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Pricing Options</h4>
            <div className="space-y-2">
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
            to={ctaLink}
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            {ctaText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Industries;