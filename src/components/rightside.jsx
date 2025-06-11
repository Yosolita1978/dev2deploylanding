'use client'
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const RightSide = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = () => {
      if (email && email.includes('@')) {
        setIsSubmitted(true);
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
      }
    };
  
    return (
        <div className="w-1/2 bg-white overflow-y-auto">
      <div className="h-full flex flex-col justify-center p-6 max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Ready to boost your portfolio and attract recruiters?
          </h2>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Join the second cohort!
          </p>
          <p className="text-gray-600 mb-4 text-sm">
            Sign up below and be the first to know when enrollment opens.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
            <p className="text-blue-800 font-medium mb-1 text-sm">
              🎥 Want a preview? Check out our first cohort!
            </p>
            <p className="text-blue-700 text-xs">
              Watch the complete first cohort sessions on our YouTube channel to see what you'll experience.
            </p>
          </div>
        </div>

        {/* Email Form */}
        <div className="mb-6">
          {!isSubmitted ? (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-black text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm"
              >
                <span>TELL ME MORE!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-green-800 mb-1">You're on the list!</h3>
              <p className="text-green-700 text-sm">We'll notify you when enrollment opens.</p>
            </div>
          )}
        </div>

        {/* Program Details */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-base font-semibold text-gray-900 mb-3">
              <span className="text-xl font-bold text-purple-600">Dev2Deploy</span> second cohort launches this{' '}
              <span className="bg-yellow-200 px-2 py-1 rounded font-bold text-gray-900">AUGUST</span> as our{' '}
              <span className="bg-yellow-200 px-2 py-1 rounded font-bold text-gray-900">FREE</span>{' '}
              program—here's how it works:
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Real-world Project:</span>
                <span className="text-gray-700"> Develop a business landing page, integrate email forms and Stripe payments.</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Team Up:</span>
                <span className="text-gray-700"> Collaborate and grow alongside peers, using industry-standard tools like GitHub Actions for continuous deployment.</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Go Live:</span>
                <span className="text-gray-700"> Launch your fully deployed site on AWS Amplify—complete with automated workflows and analytics.</span>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100 mt-4">
            <p className="text-center text-gray-800 font-medium mb-1 text-sm">
              Spaces are limited and enrollment closes soon.
            </p>
            <p className="text-center text-gray-700 mb-2 text-sm">
              Don't miss this chance to showcase a professional-grade project employers will notice.
            </p>
            <p className="text-center font-bold text-base text-purple-700">
              Sign up today and finally bridge the gap from Dev to Deploy!
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RightSide;