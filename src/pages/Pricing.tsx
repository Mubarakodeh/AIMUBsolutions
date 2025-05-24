import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Bot, Shield, Zap, Users } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  setupFee: string;
  monthlyFee: string;
  features: string[];
  bestFor: string;
  badge?: string;
}

function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "DIY Setup + Support",
      description: "Perfect for businesses who want control of their tools and accounts",
      setupFee: "$1,500–$2,000+",
      monthlyFee: "$197–$297",
      features: [
        "Full configuration & integration",
        "SOPs and team training",
        "Support, updates, and ongoing help",
        "Access to all features",
        "Custom automation workflows",
        "Regular optimization reviews"
      ],
      bestFor: "Clients who want control of their tools/accounts",
      badge: "Most Flexible"
    },
    {
      name: "Fully Managed Service",
      description: "Let us handle everything while you focus on your business",
      setupFee: "No setup fee",
      monthlyFee: "$697–$997",
      features: [
        "All DIY features included",
        "Hosting of all bots & automations",
        "24/7 monitoring & maintenance",
        "Monthly performance reports",
        "Unlimited support & changes",
        "Dedicated success manager"
      ],
      bestFor: "Clients who want everything managed for them",
      badge: "Most Popular"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Pricing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Choose the plan that works best for your business. All plans include our full suite of AI-powered features.
          </p>
        </div>
      </header>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 relative">
                {plan.badge && (
                  <div className="absolute -top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="bg-slate-700 rounded-lg p-4 mb-2">
                    <p className="text-sm text-slate-300">Setup Fee</p>
                    <p className="text-2xl font-bold text-white">{plan.setupFee}</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-sm text-slate-300">Monthly Fee</p>
                    <p className="text-2xl font-bold text-white">{plan.monthlyFee}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-300">Best For</p>
                  <p className="text-white">{plan.bestFor}</p>
                </div>
                
                <Link
                  to="/contact-form"
                  className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">All Plans Include</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-6 rounded-xl">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-300">Bank-level encryption and data protection</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl">
              <Bot className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-slate-300">Latest AI technology and automation tools</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl">
              <Zap className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Updates</h3>
              <p className="text-slate-300">Regular updates and new features</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl">
              <Users className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Support Team</h3>
              <p className="text-slate-300">Expert help whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Not sure which plan is right for you?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Let's discuss your needs and find the perfect solution for your business.
          </p>
          <Link 
            to="/contact-form"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition transform hover:scale-105"
          >
            Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;