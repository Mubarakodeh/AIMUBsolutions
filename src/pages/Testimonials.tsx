import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Bot,
  Database,
  Calendar,
  Building,
  Briefcase,
  BarChart3
} from 'lucide-react';

function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredTestimonials = [
    {
      quote: "AI MUB's customer support automation has completely transformed our business. We've seen a 30% reduction in response times and our team can now focus on complex issues while the AI handles routine inquiries. The ROI has been incredible.",
      author: "Sarah Johnson",
      position: "Customer Experience Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Technology",
      service: "customer-support"
    },
    {
      quote: "The CRM integration has streamlined our sales process and improved conversion rates by 40%. The AI-powered lead scoring helps our team prioritize prospects, and the automated follow-ups ensure no opportunity falls through the cracks.",
      author: "Michael Chen",
      position: "VP of Sales",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Business Services",
      service: "crm-integration"
    },
    {
      quote: "Smart scheduling eliminated no-shows and doubled our appointment efficiency. Our patients love the automated reminders, and our staff appreciates the reduced administrative burden. It's been a game-changer for our practice.",
      author: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Healthcare Plus",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Healthcare",
      service: "appointment-scheduling"
    }
  ];
  
  const allTestimonials = [
    ...featuredTestimonials,
    {
      quote: "We implemented AI MUB's customer support solution during our peak season, and it handled a 300% increase in inquiries without adding staff. Customer satisfaction actually improved despite the volume!",
      author: "David Park",
      position: "Customer Support Manager",
      company: "RetailGiant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Retail",
      service: "customer-support"
    },
    {
      quote: "The AI-powered CRM integration has given us insights we never would have discovered on our own. We've been able to identify patterns in customer behavior that have led to a 25% increase in upsell opportunities.",
      author: "Jennifer Lee",
      position: "Marketing Director",
      company: "SaaS Innovations",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Technology",
      service: "crm-integration"
    },
    {
      quote: "Our hotel has seen a dramatic improvement in guest satisfaction since implementing AI MUB's solutions. The 24/7 support and automated check-in reminders have reduced front desk calls by 45%.",
      author: "Carlos Mendez",
      position: "General Manager",
      company: "Luxury Suites Hotel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Hospitality",
      service: "customer-support"
    },
    {
      quote: "The appointment scheduling system has been a lifesaver for our salon. We've reduced no-shows by 75% and our stylists love that their schedules are always optimized.",
      author: "Sophia Williams",
      position: "Owner",
      company: "Elegance Hair Studio",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Beauty & Wellness",
      service: "appointment-scheduling"
    },
    {
      quote: "AI MUB's CRM integration has transformed how we manage our warranty claims process. The automated workflows have cut processing time by 60% and improved accuracy significantly.",
      author: "Robert Johnson",
      position: "Operations Director",
      company: "AutoShield Warranty",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      industry: "Automotive",
      service: "crm-integration"
    }
  ];
  
  const filteredTestimonials = activeTab === 'all' 
    ? allTestimonials 
    : allTestimonials.filter(t => t.service === activeTab);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredTestimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            What Our Clients 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Say</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Discover how businesses like yours have transformed operations with AI MUB's automation solutions.
          </p>
        </div>
      </header>

      {/* Featured Testimonials Carousel */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Success Stories</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-slate-700 rounded-xl p-8 md:p-12 border border-slate-600">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                          />
                          <div className="text-center">
                            <p className="text-white font-semibold text-xl">{testimonial.author}</p>
                            <p className="text-slate-400">{testimonial.position}</p>
                            <p className="text-blue-400 font-medium">{testimonial.company}</p>
                            <div className="flex items-center justify-center mt-3">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="text-5xl text-blue-400 mb-4">
                            <QuoteIcon />
                          </div>
                          <p className="text-slate-300 text-lg italic mb-6">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-3">
                            {testimonial.service === 'customer-support' && (
                              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <Bot className="w-4 h-4" /> AI Customer Support
                              </span>
                            )}
                            {testimonial.service === 'crm-integration' && (
                              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <Database className="w-4 h-4" /> CRM Integration
                              </span>
                            )}
                            {testimonial.service === 'appointment-scheduling' && (
                              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> Smart Scheduling
                              </span>
                            )}
                            <span className="bg-slate-600 text-slate-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                              <Building className="w-4 h-4" /> {testimonial.industry}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full -ml-4 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full -mr-4 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mt-6 gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Client Testimonials</h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('customer-support')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'customer-support'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Customer Support
              </button>
              <button
                onClick={() => setActiveTab('crm-integration')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'crm-integration'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                CRM Integration
              </button>
              <button
                onClick={() => setActiveTab('appointment-scheduling')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'appointment-scheduling'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Scheduling
              </button>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Real Results Our Clients Achieve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MetricCard
              icon={<Bot className="w-12 h-12 text-blue-400" />}
              title="Customer Support"
              metrics={[
                { label: "Response Time", value: "-70%" },
                { label: "Customer Satisfaction", value: "+35%" },
                { label: "Support Coverage", value: "24/7" }
              ]}
            />
            <MetricCard
              icon={<Database className="w-12 h-12 text-purple-400" />}
              title="CRM Integration"
              metrics={[
                { label: "Lead Conversion", value: "+40%" },
                { label: "Data Accuracy", value: "99.9%" },
                { label: "Time Saved", value: "15hrs/week" }
              ]}
            />
            <MetricCard
              icon={<Calendar className="w-12 h-12 text-green-400" />}
              title="Smart Scheduling"
              metrics={[
                { label: "No-Show Reduction", value: "80%" },
                { label: "Booking Rate", value: "+40%" },
                { label: "Administrative Time", value: "-65%" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Success Across Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IndustryCard
              icon={<Briefcase className="w-10 h-10 text-blue-400" />}
              industry="Business Services"
              count="45+"
              description="Professional services firms using AI to streamline client interactions and operations."
            />
            <IndustryCard
              icon={<Building className="w-10 h-10 text-purple-400" />}
              industry="Healthcare"
              count="30+"
              description="Medical practices and clinics enhancing patient experiences with AI automation."
            />
            <IndustryCard
              icon={<HotelIcon className="w-10 h-10 text-green-400" />}
              industry="Hospitality"
              count="25+"
              description="Hotels and resorts delivering exceptional guest experiences through AI."
            />
            <IndustryCard
              icon={<ShoppingCartIcon className="w-10 h-10 text-red-400" />}
              industry="Retail & E-commerce"
              count="50+"
              description="Retailers using AI to provide seamless customer support and personalization."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Join the Businesses Growing with AI</h2>
          <p className="text-xl text-slate-300 mb-12">
            Experience the same transformative results that our clients have achieved with AI MUB's solutions.
          </p>
          <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition transform hover:scale-105">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
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
      className="bg-slate-700 rounded-xl p-6 border border-slate-600 opacity-0 translate-y-4 transition-all duration-300 hover:border-blue-500"
    >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">{testimonial.author}</p>
          <p className="text-slate-400 text-sm">{testimonial.position}</p>
          <p className="text-blue-400 text-sm">{testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-2">
        {testimonial.service === 'customer-support' && (
          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Bot className="w-3 h-3" /> AI Support
          </span>
        )}
        {testimonial.service === 'crm-integration' && (
          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Database className="w-3 h-3" /> CRM
          </span>
        )}
        {testimonial.service === 'appointment-scheduling' && (
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Scheduling
          </span>
        )}
        <span className="bg-slate-600 text-slate-300 px-2 py-1 rounded-full text-xs">
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
}

function MetricCard({ icon, title, metrics }) {
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
      className="bg-slate-700 rounded-xl p-8 opacity-0 translate-y-4 transition-all duration-500"
    >
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white text-center mb-8">{title}</h3>
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">{metric.value}</div>
            <div className="text-slate-300">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryCard({ icon, industry, count, description }) {
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
      className="bg-slate-800 rounded-xl p-6 border border-slate-700 opacity-0 translate-y-4 transition-all duration-300 hover:border-blue-500"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{industry}</h3>
      <div className="text-2xl font-bold text-blue-400 mb-3">{count}</div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

// Renamed from Quote to QuoteIcon to avoid duplicate declaration
function QuoteIcon(props) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function HotelIcon(props) {
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
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export default Testimonials;