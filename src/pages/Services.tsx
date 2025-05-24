import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Plus, 
  Puzzle, 
  Brain,
  ArrowRight,
  MessageSquare,
  Calendar,
  Globe,
  Database,
  BarChart3,
  Wrench,
  Home,
  ShoppingBag,
  Stethoscope
} from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the setup that fits your business. Whether you need a quick landing page, a full automation stack, or a hands-free voice assistant—we've got you covered.
            </p>
          </div>
        </div>
      </header>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <CategoryCard
              icon={<Bot className="w-12 h-12 text-blue-400" />}
              title="Core Services"
              description="Essential AI tools and automations for your business"
              link="/services/core"
            />
            <CategoryCard
              icon={<Plus className="w-12 h-12 text-purple-400" />}
              title="Add-Ons"
              description="Enhance your setup with powerful extras"
              link="/services/add-ons"
            />
            <CategoryCard
              icon={<Puzzle className="w-12 h-12 text-green-400" />}
              title="Industry Bundles"
              description="Pre-built solutions for your specific industry"
              link="/services/bundles"
            />
            <CategoryCard
              icon={<Brain className="w-12 h-12 text-red-400" />}
              title="Custom Projects"
              description="Tailored solutions built just for you"
              link="/services/custom"
            />
          </div>

          {/* Core Services Preview */}
          <div className="mb-20">
            <SectionHeader
              title="Core Services"
              description="Modular, pick-and-play solutions perfect for fast automation upgrades."
              link="/services/core"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <ServicePreviewCard
                icon={<Bot className="w-8 h-8 text-blue-400" />}
                title="AI Booking Assistant"
                description="Smart scheduling system that handles appointments automatically."
                price="from $297/mo"
              />
              <ServicePreviewCard
                icon={<MessageSquare className="w-8 h-8 text-purple-400" />}
                title="Voice Agent"
                description="AI-powered call handling for 24/7 phone support."
                price="from $497/mo"
              />
              <ServicePreviewCard
                icon={<Globe className="w-8 h-8 text-green-400" />}
                title="Landing Page Design"
                description="High-converting pages with built-in AI features."
                price="from $397"
              />
            </div>
          </div>

          {/* Add-Ons Preview */}
          <div className="mb-20">
            <SectionHeader
              title="Add-Ons"
              description="Enhance your setup with these powerful extras."
              link="/services/add-ons"
            />
            <div className="grid md:grid-cols-4 gap-8">
              <ServicePreviewCard
                icon={<Brain className="w-8 h-8 text-blue-400" />}
                title="Custom AI Prompts"
                description="Tailored AI responses for your needs."
                price="+$99"
              />
              <ServicePreviewCard
                icon={<BarChart3 className="w-8 h-8 text-purple-400" />}
                title="Analytics Dashboard"
                description="Custom reporting and insights."
                price="+$147"
              />
              <ServicePreviewCard
                icon={<Database className="w-8 h-8 text-green-400" />}
                title="Hosting & Config"
                description="Professional setup and management."
                price="+$197"
              />
              <ServicePreviewCard
                icon={<Calendar className="w-8 h-8 text-red-400" />}
                title="Content Generator"
                description="AI-powered content creation."
                price="+$197"
              />
            </div>
          </div>

          {/* Industry Bundles Preview */}
          <div className="mb-20">
            <SectionHeader
              title="Industry Bundles"
              description="Complete automation stacks tailored to your industry."
              link="/services/bundles"
            />
            <div className="grid md:grid-cols-4 gap-8">
              <ServicePreviewCard
                icon={<Wrench className="w-8 h-8 text-blue-400" />}
                title="HVAC & Home Services"
                description="Complete automation suite."
                price="from $697/mo"
              />
              <ServicePreviewCard
                icon={<Home className="w-8 h-8 text-purple-400" />}
                title="Real Estate"
                description="Lead capture and nurturing."
                price="from $797/mo"
              />
              <ServicePreviewCard
                icon={<ShoppingBag className="w-8 h-8 text-green-400" />}
                title="E-commerce"
                description="Customer support automation."
                price="from $897/mo"
              />
              <ServicePreviewCard
                icon={<Stethoscope className="w-8 h-8 text-red-400" />}
                title="Medical Clinics"
                description="Patient scheduling system."
                price="from $997/mo"
              />
            </div>
          </div>

          {/* Custom Projects */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Custom Projects</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Need something unique? Let's build a custom solution that perfectly fits your business requirements.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/services/custom"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition"
              >
                Start Custom Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Not Sure Where to Start?</h2>
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

function CategoryCard({ icon, title, description, link }: CategoryCardProps) {
  return (
    <Link 
      to={link}
      className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      <div className="flex items-center text-blue-400">
        Learn More <ArrowRight className="w-5 h-5 ml-2" />
      </div>
    </Link>
  );
}

function ServicePreviewCard({ icon, title, description, price }: { icon: React.ReactNode; title: string; description: string; price: string }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <p className="text-blue-400 font-semibold">{price}</p>
    </div>
  );
}

function SectionHeader({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-slate-300">{description}</p>
      </div>
      <Link 
        to={link}
        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
      >
        View All <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Services;