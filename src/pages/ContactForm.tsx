import React, { useState } from 'react';
import { Bot } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Schedule Your Free Consultation</h1>
          </div>
          <p className="text-xl text-slate-300 mb-12">
            Discuss your business needs and learn how AI automation can help, with a 7-day risk-free trial after setup.
          </p>
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/aimubsolutions/demo-call" style={{ minWidth: '320px', height: '700px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;