import React from 'react';
import { ChevronRight, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-xl"></div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Gear Up.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Play Hard.
                </span>
                <span className="block">Win Big.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Professional-grade sports equipment for cricket, football, badminton, and fitness. 
                Elevate your game with TitanGear.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
                <span>Shop Now</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Premium Products</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10k+</div>
                  <div className="text-blue-200 text-sm">Happy Athletes</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE="
                alt="Professional Sports Equipment"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-lg transform rotate-12">
              <div className="text-2xl font-bold">20%</div>
              <div className="text-sm">OFF</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-2xl shadow-lg transform -rotate-12">
              <div className="text-sm font-medium">Free</div>
              <div className="text-lg font-bold">Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;