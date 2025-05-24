import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  ArrowRight, 
  Users,
  Lightbulb,
  Target,
  BrainCircuit,
  Shield,
  BarChart3,
  Clock
} from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                About 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI MUB</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                We're on a mission to transform businesses through intelligent automation, making AI accessible and effective for companies of all sizes.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition w-fit">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6">Our Core Values</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <Bot className="w-10 h-10 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold text-lg">Innovation</h3>
                    <p className="text-slate-300 text-sm">Pushing the boundaries of AI technology</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <Shield className="w-10 h-10 text-green-400 mb-3" />
                    <h3 className="text-white font-semibold text-lg">Integrity</h3>
                    <p className="text-slate-300 text-sm">Transparent and ethical AI solutions</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <Users className="w-10 h-10 text-red-400 mb-3" />
                    <h3 className="text-white font-semibold text-lg">Client Success</h3>
                    <p className="text-slate-300 text-sm">Proven results across multiple industries</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <BarChart3 className="w-10 h-10 text-purple-400 mb-3" />
                    <h3 className="text-white font-semibold text-lg">Data-Driven</h3>
                    <p className="text-slate-300 text-sm">Insights that drive measurable business growth</p>
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-700 rounded-xl p-8 border border-slate-600">
              <div className="mb-6">
                <Lightbulb className="w-12 h-12 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-300 text-lg mb-6">
                To empower businesses of all sizes with accessible, powerful AI automation that transforms operations, enhances customer experiences, and drives sustainable growth.
              </p>
              <p className="text-slate-300">
                We believe that AI technology should be accessible to every business, not just tech giants. Our mission is to democratize AI by providing solutions that are easy to implement, cost-effective, and deliver immediate value.
              </p>
            </div>
            <div className="bg-slate-700 rounded-xl p-8 border border-slate-600">
              <div className="mb-6">
                <Target className="w-12 h-12 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-slate-300 text-lg mb-6">
                To lead the AI automation revolution, creating a future where businesses can focus on creativity and strategy while AI handles routine operations with precision and efficiency.
              </p>
              <p className="text-slate-300">
                We envision a world where AI and human intelligence work in harmony, with businesses leveraging automation to enhance human capabilities rather than replace them. Our solutions are designed to augment your team's strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ExpertiseCard
              icon={<Bot className="w-12 h-12 text-blue-400" />}
              title="AI Customer Support"
              description="Intelligent chatbots and automation systems that provide instant, personalized customer support 24/7."
              years="5+ Years"
            />
            <ExpertiseCard
              icon={<Database className="w-12 h-12 text-purple-400" />}
              title="CRM Integration"
              description="Seamless AI integration with your existing CRM systems to enhance lead generation, qualification, and customer insights."
              years="7+ Years"
            />
            <ExpertiseCard
              icon={<Calendar className="w-12 h-12 text-green-400" />}
              title="Smart Scheduling"
              description="AI-powered appointment booking and management systems that eliminate no-shows and optimize calendars."
              years="4+ Years"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose AI MUB?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-xl p-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <BrainCircuit className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Expertise</h3>
                    <p className="text-slate-300">Our team includes AI specialists with deep expertise in machine learning, natural language processing, and automation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Rapid Implementation</h3>
                    <p className="text-slate-300">Get up and running in days, not months, with our streamlined implementation process and pre-built solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-slate-300">Bank-level encryption and compliance with GDPR, HIPAA, and other regulations to keep your data safe.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-700 rounded-xl p-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                    <p className="text-slate-300">Our customer success team ensures smooth implementation and provides ongoing support for your AI solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Results</h3>
                    <p className="text-slate-300">We measure success through tangible metrics and continuously optimize your AI solutions for maximum ROI.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-slate-300">Our AI systems grow with your business, handling increased volume without additional cost or complexity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard
              icon={<Innovation className="w-10 h-10 text-blue-400" />}
              title="Innovation"
              description="We constantly push the boundaries of what's possible with AI technology."
            />
            <ValueCard
              icon={<Integrity className="w-10 h-10 text-green-400" />}
              title="Integrity"
              description="We operate with transparency and honesty in all our client relationships."
            />
            <ValueCard
              icon={<Excellence className="w-10 h-10 text-purple-400" />}
              title="Excellence"
              description="We strive for the highest quality in every solution we deliver."
            />
            <ValueCard
              icon={<Collaboration className="w-10 h-10 text-red-400" />}
              title="Collaboration"
              description="We work closely with clients to ensure their success is our success."
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Johnson"
              position="CEO & Founder"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              description="Former AI Research Lead at Tech Giant with 15+ years of experience in machine learning and business automation."
            />
            <TeamMember
              name="Sarah Chen"
              position="CTO"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              description="AI engineer with expertise in natural language processing and conversational AI systems."
            />
            <TeamMember
              name="Michael Rodriguez"
              position="Head of Client Success"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              description="Customer experience specialist focused on ensuring clients achieve maximum ROI from AI implementations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Leverage AI for Your Business?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Let's discuss how our AI solutions can address your specific business challenges and opportunities.
          </p>
          <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition transform hover:scale-105">
            Let's Talk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ExpertiseCard({ icon, title, description, years }) {
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
      className="bg-slate-700 rounded-xl p-8 border border-slate-600 opacity-0 translate-y-4 transition-all duration-500 hover:border-blue-500"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm inline-block mb-4">
        {years}
      </div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
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
      className="bg-slate-700 rounded-xl p-6 text-center opacity-0 translate-y-4 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function TeamMember({ name, position, image, description }) {
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
      className="bg-slate-700 rounded-xl p-6 text-center opacity-0 translate-y-4 transition-all duration-300"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
      />
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-blue-400 mb-4">{position}</p>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

// Custom icons
function Database(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function Calendar(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function Innovation(props) {
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
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="M4.93 4.93l3.54 3.54" />
      <path d="M15.54 15.54l3.54 3.54" />
      <path d="M4.93 19.07l3.54-3.54" />
      <path d="M15.54 8.46l3.54-3.54" />
    </svg>
  );
}

function Integrity(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Excellence(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function Collaboration(props) {
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
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default About;