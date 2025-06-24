'use client'
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const RightSide = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Email saved:', data);
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit email. Please try again.');
    } finally {
      setIsLoading(false);
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
          <p className="text-lg text-[#b43504] font-semibold mb-4">
            Join the second cohort!
          </p>
          <p className="text-gray-600 mb-4 text-sm">
            📅 Classes run every <strong>Saturday in August</strong> from <strong>10:30 a.m. to 12:00 p.m. PST</strong>, starting <strong>August 2</strong> and ending <strong>August 30</strong>.<br />
            🧠 Sessions are recorded, and all materials will be shared via a public GitHub repo.
          </p>
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
                disabled={isLoading || !email}
                className="w-full bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? 'Submitting...' : 'LET\'S START!'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          ) : (
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-green-800 mb-1">You're on the list!</h3>
              <p className="text-green-700 text-sm">
                You’re on the list! We’ll send you the Zoom link, GitHub repo, and recordings before the first class.
              </p>
            </div>
          )}
        </div>

        {/* Program Details */}
        <div className="space-y-4">
          <div className="text-center">
            

              <p className="text-base font-semibold text-gray-900 mb-3">Leave your email to receive the calendar invite for the first live session — and get ready to build!</p>
              
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

          {/* Video Preview at Bottom */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-6">
            <p className="text-[#b43504] font-medium mb-1 text-sm">
              🎥 Want a preview? Check out our first cohort!
            </p>
            <p className="text-blue-700 text-xs mb-2">
              Watch the complete first cohort sessions on our YouTube channel to see what you'll experience.
            </p>
            <a
              href="https://youtu.be/Oj1L3BuIJuw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm underline hover:no-underline transition-colors"
            >
              <span>Watch First Cohort Videos →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
