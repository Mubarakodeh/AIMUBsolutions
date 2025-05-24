import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  ArrowRight, 
  MessageSquare,
  Calendar,
  Target,
  Users,
  CheckCircle,
  Brain,
  Zap,
  Clock,
  BarChart3,
  Shield,
  LineChart,
  Settings
} from 'lucide-react';

function AIAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advanced
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Transform your business operations with intelligent AI assistants that automate tasks, engage customers, and drive growth.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Support */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <MessageSquare className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Customer Support</h3>
              <p className="text-slate-300 mb-6">
                24/7 automated support with intelligent responses and seamless human handoff. Handle customer inquiries instantly and efficiently.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Reduce response time by up to 80%
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Handle multiple inquiries simultaneously
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Improve customer satisfaction scores
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Brain className="w-5 h-5 text-blue-400" />
                    Natural language understanding
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Settings className="w-5 h-5 text-blue-400" />
                    Smart routing to human agents
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    Performance analytics dashboard
                  </li>
                </ul>
              </div>
              <Link 
                to="/customer-support"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Appointment Scheduling */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <Calendar className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Appointment Scheduling</h3>
              <p className="text-slate-300 mb-6">
                Smart booking system with automated reminders and calendar management. Reduce no-shows and optimize your schedule.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Reduce no-shows by up to 75%
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Save 10+ hours per week on scheduling
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Increase booking efficiency by 40%
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Brain className="w-5 h-5 text-green-400" />
                    Smart availability management
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Settings className="w-5 h-5 text-green-400" />
                    Automated reminder system
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    Calendar analytics
                  </li>
                </ul>
              </div>
              <Link 
                to="/appointment-scheduling"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Lead Capture */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Lead Capture</h3>
              <p className="text-slate-300 mb-6">
                AI-powered lead qualification and automated follow-up sequences. Convert more visitors into qualified leads.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Increase lead conversion by 35%
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Automate lead nurturing process
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Improve lead quality scoring
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Brain className="w-5 h-5 text-purple-400" />
                    Smart lead qualification
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Settings className="w-5 h-5 text-purple-400" />
                    Automated follow-up sequences
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    Conversion analytics
                  </li>
                </ul>
              </div>
              <Link 
                to="/lead-capture"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Staff Training */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300">
              <Users className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Staff Training</h3>
              <p className="text-slate-300 mb-6">
                AI-driven training modules and performance tracking for your team. Improve skills and monitor progress.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Reduce training time by 50%
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Improve skill retention rates
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Track performance improvements
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Brain className="w-5 h-5 text-red-400" />
                    Personalized learning paths
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Settings className="w-5 h-5 text-red-400" />
                    Interactive training modules
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <BarChart3 className="w-5 h-5 text-red-400" />
                    Progress tracking dashboard
                  </li>
                </ul>
              </div>
              <Link 
                to="/staff-training"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Real Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-700 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-lg font-semibold text-white mb-2">Faster Response</div>
              <p className="text-slate-300">Average reduction in customer response time</p>
            </div>
            <div className="bg-slate-700 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
              <div className="text-lg font-semibold text-white mb-2">Fewer No-Shows</div>
              <p className="text-slate-300">Reduction in missed appointments</p>
            </div>
            <div className="bg-slate-700 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">35%</div>
              <div className="text-lg font-semibold text-white mb-2">More Leads</div>
              <p className="text-slate-300">Increase in qualified lead generation</p>
            </div>
            <div className="bg-slate-700 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">50%</div>
              <div className="text-lg font-semibold text-white mb-2">Faster Training</div>
              <p className="text-slate-300">Reduction in employee training time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Transform your business with intelligent AI assistants that work 24/7.
          </p>
          <Link 
            to="/contact-form"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 transition transform hover:scale-105"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AIAssistant;