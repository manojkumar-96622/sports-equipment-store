import React, { useState } from 'react';
import { Mail, CheckCircle, Gift, Bell, Users } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Deals',
      description: 'Get access to subscriber-only discounts and early bird offers'
    },
    {
      icon: Bell,
      title: 'New Arrivals',
      description: 'Be the first to know about latest sports equipment and gear'
    },
    {
      icon: Users,
      title: 'Expert Tips',
      description: 'Receive training tips and equipment guides from professionals'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Game</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new product launches, 
              and expert sports tips delivered straight to your inbox
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-200">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-blue-200 text-sm text-center">
                  Join over 10,000 athletes who trust TitanGear. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Team!</h3>
                <p className="text-blue-200">
                  Thank you for subscribing. You'll receive our latest updates and exclusive offers soon.
                </p>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Easy Unsubscribe</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;