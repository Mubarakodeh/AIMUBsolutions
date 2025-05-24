import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Mail, Phone, MapPin, Plus, Puzzle, Brain } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo variant="light" size="md" />
            <p className="text-slate-400 mt-4">
              AI-powered automation solutions for modern businesses.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:info@aimub.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Mail className="w-4 h-4" />
                info@aimub.com
              </a>
              <a href="tel:+1-800-AI-SOLUTIONS" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Phone className="w-4 h-4" />
                1-800-AI-SOLUTIONS
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                123 Innovation Drive, Tech District
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-400" />
                <Link to="/services/core" className="text-slate-300 hover:text-white transition">Core Services</Link>
              </li>
              <li className="flex items-center gap-2">
                <Plus className="w-4 h-4 text-purple-400" />
                <Link to="/services/add-ons" className="text-slate-300 hover:text-white transition">Add-Ons</Link>
              </li>
              <li className="flex items-center gap-2">
                <Puzzle className="w-4 h-4 text-green-400" />
                <Link to="/services/bundles" className="text-slate-300 hover:text-white transition">Industry Bundles</Link>
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-red-400" />
                <Link to="/services/custom" className="text-slate-300 hover:text-white transition">Custom Projects</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-300 hover:text-white transition">Industries</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-white transition">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-300 hover:text-white transition">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <p className="text-slate-300 mb-4">
              Ready to transform your business with AI automation?
            </p>
            <Link 
              to="/contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400">
            © {new Date().getFullYear()} AI MUB. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;