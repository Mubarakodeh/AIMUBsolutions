import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Cookie, Database, Users, Scale } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>

          <div className="text-slate-300 space-y-8">
            <section>
              <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-4">
                AI MUB ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name and information</li>
                  <li>Payment information (when applicable)</li>
                </ul>

                <h3 className="text-lg font-medium text-white">Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Log data and device information</li>
                  <li>IP address and browser type</li>
                  <li>Pages visited and features used</li>
                  <li>Time spent on our services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you service-related communications</li>
                <li>Improve our services and user experience</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-blue-400" />
                Cookies and Tracking
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
              </p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for basic functionality</li>
                  <li>Analytics cookies to understand usage</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for targeted advertising</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Information Sharing
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-400" />
                Your Rights
              </h2>
              <p className="mb-4">Under GDPR and CCPA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                For privacy-related questions or concerns, please contact us at{' '}
                <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                  privacy@aimub.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;