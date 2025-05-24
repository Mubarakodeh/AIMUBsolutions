import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  LineChart,
  BrainCircuit,
  Sparkles,
  Repeat,
  HeartHandshake
} from 'lucide-react';

function CustomerSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Deliver Instant, Personalized 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Customer Support with AI</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Reduce wait times, improve customer satisfaction, and handle inquiries 24/7 with our AI Assistant and automation solutions.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Get a Free Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 rounded-tl-none">
                    <p className="text-white">Hello! I'm your AI assistant. How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6 justify-end">
                  <div className="bg-blue-500/20 rounded-lg p-4 rounded-tr-none">
                    <p className="text-blue-300">I need help with my recent order #45678. It hasn't arrived yet.</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 rounded-tl-none">
                    <p className="text-white">I'm checking your order #45678 right now. According to our system, your package is out for delivery today and should arrive by 5 PM. Would you like me to send you a tracking link?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-blue-500/20 rounded-lg p-4 rounded-tr-none">
                    <p className="text-blue-300">Yes, please send me the tracking link. Thank you!</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-slate-300" />
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={<Clock className="w-10 h-10 text-blue-400" />}
              title="Faster Response Times"
              description="Instantly resolve customer questions with AI-driven chatbots, available 24/7."
            />
            <BenefitCard 
              icon={<Sparkles className="w-10 h-10 text-purple-400" />}
              title="Personalized Interactions"
              description="AI learns customer behavior to provide tailored responses that feel human."
            />
            <BenefitCard 
              icon={<BarChart3 className="w-10 h-10 text-green-400" />}
              title="Scalability"
              description="Handle thousands of inquiries simultaneously without increasing costs."
            />
            <BenefitCard 
              icon={<HeartHandshake className="w-10 h-10 text-red-400" />}
              title="Seamless Hand-Off"
              description="AI works with human agents for a flawless customer experience when needed."
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
              title="AI Handles Routine Inquiries"
              description="Chatbots answer FAQs and common requests, freeing up your team for complex issues."
              icon={<Bot className="w-12 h-12 text-blue-400" />}
            />
            <StepCard
              number="2"
              title="Smart Routing"
              description="Complex issues are directed to the right human agent with full context for seamless transitions."
              icon={<Repeat className="w-12 h-12 text-purple-400" />}
            />
            <StepCard
              number="3"
              title="Data-Driven Insights"
              description="AI tracks trends and customer satisfaction to continuously improve support quality."
              icon={<BrainCircuit className="w-12 h-12 text-green-400" />}
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
              value="70%"
              label="Faster Response Time"
              description="Customers get answers in seconds instead of minutes or hours"
            />
            <MetricCard
              value="24/7"
              label="Support Coverage"
              description="Never miss a customer inquiry, even outside business hours"
            />
            <MetricCard
              value="40%"
              label="Cost Reduction"
              description="Lower support costs while improving customer satisfaction"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Since using AI MUB's AI support, we cut response times by 70% and increased customer satisfaction scores by 35%. Our team now focuses on complex issues while the AI handles routine questions."
              author="Sarah Johnson"
              company="TechCorp Inc."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            <TestimonialCard
              quote="The AI customer support has been a game-changer for our e-commerce business. During peak seasons, we can handle 10x the volume without adding staff. The ROI has been incredible."
              author="Michael Chen"
              company="Global Retail Solutions"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
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
              icon={<MessageSquare className="w-8 h-8 text-blue-400" />}
              title="Natural Language Processing"
              description="Our AI understands context, sentiment, and intent to provide accurate responses."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-purple-400" />}
              title="Multi-language Support"
              description="Support customers in over 100 languages with automatic translation."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-400" />}
              title="Enterprise-grade Security"
              description="Bank-level encryption and compliance with GDPR, HIPAA, and other regulations."
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-red-400" />}
              title="Analytics Dashboard"
              description="Track performance metrics and gain insights to improve customer experience."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Instant Deployment"
              description="Get up and running in days, not months, with our streamlined implementation."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-teal-400" />}
              title="Human Handoff"
              description="Seamless transition to human agents for complex issues with full context."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Upgrade Your Customer Support with AI?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join leading companies that have revolutionized their customer support with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Watch Demo <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
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
      className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 opacity-0 translate-y-4 hover:translate-y-[-4px]"
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
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
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
      <div ref={valueRef} className="text-5xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-xl font-semibold text-white mb-4">{label}</div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, company, image }) {
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
      <p className="text-slate-300 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <p className="text-white font-semibold">{author}</p>
          <p className="text-slate-400">{company}</p>
        </div>
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
      className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 opacity-0 translate-y-4"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function Globe(props) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function PlayCircle(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

export default CustomerSupport;