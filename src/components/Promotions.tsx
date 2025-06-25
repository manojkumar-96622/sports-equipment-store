import React from 'react';
import { Percent, Clock, Gift } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: '20% OFF Gym Equipment',
      description: 'Get huge discounts on all fitness equipment including dumbbells, resistance bands, and more',
      discount: '20%',
      code: 'GYM20',
      validUntil: '31 March 2025',
      icon: Percent,
      gradient: 'from-orange-500 to-red-500',
      bgImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Free Shipping',
      description: 'Free delivery on all orders above ₹2,999. No minimum quantity required',
      discount: 'FREE',
      code: 'SHIP FREE',
      validUntil: 'Limited Time',
      icon: Gift,
      gradient: 'from-green-500 to-emerald-500',
      bgImage: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Flash Sale',
      description: 'Limited time offers on cricket bats, footballs, and badminton racquets',
      discount: '15%',
      code: 'FLASH15',
      validUntil: '48 Hours Left',
      icon: Clock,
      gradient: 'from-purple-500 to-pink-500',
      bgImage: 'https://images.pexels.com/photos/5367678/pexels-photo-5367678.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Offers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing deals and save big on your favorite sports equipment
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promotion) => {
            const IconComponent = promotion.icon;
            return (
              <div
                key={promotion.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={promotion.bgImage}
                    alt={promotion.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${promotion.gradient} opacity-90`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white min-h-[320px] flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-2xl font-bold">{promotion.discount}</span>
                      {promotion.discount !== 'FREE' && <span className="text-lg ml-1">OFF</span>}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{promotion.title}</h3>
                    <p className="text-white/90 leading-relaxed mb-6">{promotion.description}</p>
                  </div>

                  {/* Code & Validity */}
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-1">Use Code:</div>
                      <div className="font-bold text-lg">{promotion.code}</div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-90">Valid until:</span>
                      <span className="font-semibold">{promotion.validUntil}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 bg-white/20 hover:bg-white hover:text-gray-900 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to stay updated on our latest offers?
            </h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter and never miss a deal!</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;