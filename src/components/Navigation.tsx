import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bot, 
  Menu, 
  X, 
  ChevronDown,
  Plus,
  Puzzle,
  Brain,
  DollarSign
} from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      title: 'Core Services',
      path: '/services/core',
      description: 'Essential AI tools for lead gen, follow-up & support',
      icon: <Bot className="w-5 h-5" />
    },
    {
      title: 'Add-Ons',
      path: '/services/add-ons',
      description: 'Enhancements like dashboards, content, or integrations',
      icon: <Plus className="w-5 h-5" />
    },
    {
      title: 'Industry Bundles',
      path: '/services/bundles',
      description: 'Pre-built solutions for HVAC, Real Estate, Ecom & more',
      icon: <Puzzle className="w-5 h-5" />
    },
    {
      title: 'Custom Projects',
      path: '/services/custom',
      description: 'Tailored AI solutions designed around your workflow',
      icon: <Brain className="w-5 h-5" />
    }
  ];

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-blue-400" />
          <span className="text-white font-bold text-xl">AI MUB</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Items */}
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              onClick={toggleServicesDropdown}
              className="text-sm font-medium transition-colors text-slate-300 hover:text-white flex items-center gap-1"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-slate-800 rounded-lg shadow-lg py-2 z-50">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`block px-4 py-3 hover:bg-slate-700 transition-colors ${
                      isActive(service.path) ? 'bg-slate-700' : ''
                    }`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`${
                        isActive(service.path) ? 'text-blue-400' : 'text-slate-400'
                      }`}>
                        {service.icon}
                      </div>
                      <span className="font-medium text-white">{service.title}</span>
                    </div>
                    <p className="text-sm text-slate-400 pl-8">{service.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className={`text-sm font-medium transition-colors ${
              isActive('/industries') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Industries
          </Link>
          
          <Link
            to="/testimonials"
            className={`text-sm font-medium transition-colors ${
              isActive('/testimonials') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Testimonials
          </Link>

          <Link
            to="/pricing"
            className={`text-sm font-medium transition-colors flex items-center gap-1 ${
              isActive('/pricing') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Pricing
          </Link>
          
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive('/about') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </Link>
          
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${
              isActive('/contact') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </Link>

          <Link 
            to="/contact-form" 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <button 
                onClick={toggleServicesDropdown}
                className="text-sm font-medium transition-colors text-slate-300 hover:text-white flex items-center justify-between w-full"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.path}
                        className="block"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className={isActive(service.path) ? 'text-blue-400' : 'text-slate-400'}>
                            {service.icon}
                          </div>
                          <span className={`font-medium ${
                            isActive(service.path) ? 'text-blue-400' : 'text-white'
                          }`}>{service.title}</span>
                        </div>
                        <p className="text-sm text-slate-400 pl-7">{service.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`text-sm font-medium transition-colors ${
                isActive('/industries') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            
            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
                isActive('/testimonials') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>

            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isActive('/pricing') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <DollarSign className="w-4 h-4" />
              Pricing
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              to="/contact-form"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;