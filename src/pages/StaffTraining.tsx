import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  ArrowRight, 
  Brain,
  BarChart3,
  Bot,
  LineChart,
  CheckCircle,
  Target,
  Award,
  BookOpen,
  Clock
} from 'lucide-react';

function StaffTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                AI-Powered 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Staff Training</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Transform your team's capabilities with personalized AI training. Accelerate learning, improve retention, and track progress in real-time.
              </p>
              <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Start Training Your Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Training Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Training Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Customer Service</span>
                          <span className="text-green-400">85%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Product Knowledge</span>
                          <span className="text-blue-400">70%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-300">Sales Techniques</span>
                          <span className="text-purple-400">90%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div className="bg-purple-400 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Next Training Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-300">Advanced Customer Support</span>
                        </div>
                        <span className="text-slate-400 text-sm">Today</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-300">Product Updates</span>
                        </div>
                        <span className="text-slate-400 text-sm">Tomorrow</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-slate-300">Sales Strategies</span>
                        </div>
                        <span className="text-slate-400 text-sm">Next Week</span>
                      </div>
                    </div>
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

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-blue-400" />}
              title="Personalized Learning"
              description="AI adapts training content and pace to each team member's learning style and progress."
            />
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="Interactive Scenarios"
              description="Practice real-world situations with our AI-powered role-playing scenarios."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              title="Progress Tracking"
              description="Monitor individual and team progress with detailed analytics and insights."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-red-400" />}
              title="Certification Programs"
              description="Structured learning paths with certificates upon completion."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-yellow-400" />}
              title="Knowledge Library"
              description="Access to comprehensive training materials and resources."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-teal-400" />}
              title="Performance Analytics"
              description="Track training effectiveness and ROI with detailed metrics."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Training Benefits</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">For Employees</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Personalized Learning Path</p>
                    <p className="text-slate-300">Training adapted to individual learning styles and pace</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Immediate Feedback</p>
                    <p className="text-slate-300">Real-time guidance and performance feedback</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Skill Development</p>
                    <p className="text-slate-300">Continuous improvement through practical exercises</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">For Organizations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Consistent Training</p>
                    <p className="text-slate-300">Standardized quality across all team members</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Cost Efficiency</p>
                    <p className="text-slate-300">Reduced training costs and faster onboarding</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Performance Tracking</p>
                    <p className="text-slate-300">Comprehensive analytics and progress reports</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Transform Your Team Today</h2>
          <p className="text-xl text-slate-300 mb-12">
            Start empowering your team with AI-powered training that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Schedule a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
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

export default StaffTraining;