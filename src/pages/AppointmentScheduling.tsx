import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Bell,
  CalendarClock,
  CalendarDays,
  Bot,
  Zap,
  BarChart3,
  Users,
  RefreshCw,
  MessageSquare,
  Mail
} from 'lucide-react';

function AppointmentScheduling() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  
  const dates = [
    { day: 'Mon', date: '12', available: true },
    { day: 'Tue', date: '13', available: true },
    { day: 'Wed', date: '14', available: true },
    { day: 'Thu', date: '15', available: false },
    { day: 'Fri', date: '16', available: true },
    { day: 'Mon', date: '19', available: true },
    { day: 'Tue', date: '20', available: true },
  ];
  
  const times = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Effortless Scheduling with 
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> AI – Book More Appointments, Save More Time</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Streamline your appointment booking process with AI-powered scheduling that eliminates back-and-forth emails and phone calls.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Try Free Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              {/* Calendar UI */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Schedule a Meeting</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">Select a Date</div>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((date, index) => (
                      <div 
                        key={index}
                        onClick={() => date.available && handleDateClick(date)}
                        className={`
                          p-2 rounded-lg text-center cursor-pointer transition
                          ${date.available 
                            ? selectedDate === date 
                              ? 'bg-green-500 text-white' 
                              : 'bg-slate-700 text-white hover:bg-slate-600' 
                            : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'}
                        `}
                      >
                        <div className="text-xs">{date.day}</div>
                        <div className="text-sm font-semibold">{date.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Time Selection */}
                {selectedDate && (
                  <div className="mb-6">
                    <div className="text-sm text-slate-400 mb-2">Select a Time</div>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((time, index) => (
                        <div 
                          key={index}
                          onClick={() => time.available && handleTimeClick(time)}
                          className={`
                            p-2 rounded-lg text-center cursor-pointer transition
                            ${time.available 
                              ? selectedTime === time 
                                ? 'bg-green-500 text-white' 
                                : 'bg-slate-700 text-white hover:bg-slate-600' 
                              : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'}
                          `}
                        >
                          <div className="text-sm">{time.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Confirm Button */}
                <Link 
                  to="/contact-form"
                  className={`
                    w-full py-3 rounded-lg font-semibold transition flex items-center justify-center
                    ${selectedDate && selectedTime 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'}
                  `}
                  onClick={(e) => {
                    if (!selectedDate || !selectedTime) {
                      e.preventDefault();
                    }
                  }}
                >
                  Confirm Appointment
                </Link>
              </div>
              
              {/* Animation elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full animate-pulse"></div>
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
              icon={<Clock className="w-10 h-10 text-green-400" />}
              title="Save Time"
              description="Eliminate back-and-forth emails and phone calls with automated scheduling."
            />
            <BenefitCard 
              icon={<CalendarDays className="w-10 h-10 text-blue-400" />}
              title="Reduce No-Shows"
              description="Automated reminders and confirmations decrease missed appointments by 80%."
            />
            <BenefitCard 
              icon={<Bot className="w-10 h-10 text-purple-400" />}
              title="AI-Powered Optimization"
              description="Smart scheduling that learns preferences and optimizes your calendar."
            />
            <BenefitCard 
              icon={<Users className="w-10 h-10 text-red-400" />}
              title="Better Client Experience"
              description="Professional, seamless booking experience that impresses clients."
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
              title="Set Your Availability"
              description="Define when you're available for meetings and appointments in our simple interface."
              icon={<Calendar className="w-12 h-12 text-green-400" />}
            />
            <StepCard
              number="2"
              title="Share Your Booking Link"
              description="Send clients your personalized booking link or embed it on your website."
              icon={<MessageSquare className="w-12 h-12 text-blue-400" />}
            />
            <StepCard
              number="3"
              title="AI Handles the Rest"
              description="Our AI manages scheduling, sends reminders, and handles rescheduling automatically."
              icon={<Bot className="w-12 h-12 text-purple-400" />}
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
              value="80%"
              label="Reduction in No-Shows"
              description="Automated reminders keep appointments on track"
            />
            <MetricCard
              value="5hrs/week"
              label="Time Saved"
              description="Eliminate scheduling tasks and focus on your core business"
            />
            <MetricCard
              value="24/7"
              label="Booking Availability"
              description="Clients can book anytime, even outside business hours"
            />
          </div>
        </div>
      </section>

      {/* Voiceflow Bot Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Try Our AI Scheduling Assistant</h2>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Experience our AI scheduling assistant in action. Ask about available times, schedule an appointment, or get information about our services.
          </p>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl">
            <div className="text-center mb-8">
              <Bot className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">AI Scheduling Assistant</h3>
              <p className="text-slate-300">
                Our AI assistant is ready to help you schedule appointments. Just start typing in the chat window below.
              </p>
            </div>
            <div className="h-16 flex items-center justify-center">
              <p className="text-slate-400 text-sm">The AI assistant will appear here. Try asking about available appointment times!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SuccessStoryCard
              quote="Since implementing AI MUB's scheduling system, we've reduced no-shows by 75% and increased our booking rate by 40%. The time saved on administrative tasks alone has been worth the investment."
              author="Dr. Sarah Johnson"
              company="Wellness Medical Center"
            />
            <SuccessStoryCard
              quote="Our sales team now spends more time selling and less time managing their calendars. The AI scheduling assistant has helped us close 30% more deals by optimizing our meeting schedule."
              author="Michael Chen"
              company="TechSales Solutions"
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
              icon={<CalendarClock className="w-8 h-8 text-green-400" />}
              title="Smart Scheduling"
              description="AI learns your preferences and optimizes your calendar automatically."
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-blue-400" />}
              title="Automated Reminders"
              description="Customizable SMS and email reminders to reduce no-shows."
            />
            <FeatureCard
              icon={<RefreshCw className="w-8 h-8 text-purple-400" />}
              title="Easy Rescheduling"
              description="Self-service rescheduling that respects your availability rules."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-red-400" />}
              title="Instant Confirmations"
              description="Automatic booking confirmations that build client confidence."
            />
            <FeatureCard
              icon={<Mail className="w-8 h-8 text-yellow-400" />}
              title="Calendar Sync"
              description="Seamless integration with Google Calendar, Outlook, and more."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-teal-400" />}
              title="Booking Analytics"
              description="Insights into scheduling patterns to optimize your availability."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Scheduling Process?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join thousands of businesses that have streamlined their appointment booking with our AI solution.
          </p>
          <Link to="/contact-form" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition transform hover:scale-105 w-fit">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
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
      className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 opacity-0 translate-y-4 hover:translate-y-[-4px]"
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
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
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
      <div ref={valueRef} className="text-5xl font-bold text-green-400 mb-2">{value}</div>
      <div className="text-xl font-semibold text-white mb-4">{label}</div>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function SuccessStoryCard({ quote, author, company }) {
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
      <div>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-slate-400">{company}</p>
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
      className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 opacity-0 translate-y-4"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

export default AppointmentScheduling;