import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, AlertCircle, FileText, Users, Lock } from 'lucide-react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          </div>

          <div className="text-slate-300 space-y-8">
            <section>
              <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-4">
                Please read these Terms of Service ("Terms") carefully before using AI MUB's services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in unauthorized access or use of our services</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                Intellectual Property
              </h2>
              <div className="space-y-4">
                <p>
                  All content, features, and functionality of our services are owned by AI MUB and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">You may not:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Copy, modify, or distribute our content</li>
                    <li>Reverse engineer our services</li>
                    <li>Remove copyright or trademark notices</li>
                    <li>Use our services for commercial purposes without authorization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                Privacy and Data Protection
              </h2>
              <p>
                Your use of our services is also governed by our{' '}
                <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>
                . By using our services, you consent to our collection and use of your information as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-400" />
                Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p>
                  AI MUB provides its services "as is" and "as available" without warranties of any kind, either express or implied.
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="font-medium text-white mb-2">We are not liable for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service interruptions or errors</li>
                    <li>Data loss or corruption</li>
                    <li>Unauthorized access to your data</li>
                    <li>Damages resulting from use of our services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                For questions about these Terms, please contact us at{' '}
                <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                  legal@aimub.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;