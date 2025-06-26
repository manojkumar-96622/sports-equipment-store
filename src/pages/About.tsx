import React from 'react';
import { Target, Award, Users, Truck, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We source only the finest sports equipment from trusted manufacturers worldwide.'
    },
    {
      icon: Award,
      title: 'Professional Grade',
      description: 'All our products meet professional standards used by athletes at every level.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We provide expert guidance and support.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your equipment when you need it most.'
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Over a decade of experience serving athletes across the country.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We are athletes ourselves and understand what it takes to excel in sports.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products Available' },
    { number: '100+', label: 'Cities Served' }
  ];

  const team = [
    {
      name: 'Vikram Singh',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former national cricket player with 15+ years in sports equipment industry.'
    },
    {
      name: 'Anita Kumar',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sports management expert ensuring smooth operations and customer satisfaction.'
    },
    {
      name: 'Rajesh Patel',
      role: 'Product Specialist',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technical expert helping customers choose the right equipment for their needs.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> TitanGear </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are passionate about empowering athletes of all levels with professional-grade sports equipment. 
              Since our founding, we've been committed to providing affordable, high-quality gear that helps athletes achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To provide affordable, professional-grade sports equipment to athletes of all levels. 
                We believe that every athlete deserves access to quality gear that can help them perform at their best, 
                regardless of their budget or skill level.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
                <p className="text-gray-700">
                  "To be your trusted partner in achieving sporting excellence by providing equipment 
                  that meets the highest standards of quality, performance, and affordability."
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sports Equipment"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">2010</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and reflect our commitment to excellence in sports equipment retail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Journey</span>
            </h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate sports enthusiasts dedicated to helping you achieve your athletic goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Story</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning (2010)</h3>
                <p className="text-gray-600 leading-relaxed">
                  TitanGear was founded by former cricket player Vikram Singh, who experienced firsthand 
                  the challenge of finding quality sports equipment at affordable prices. After retiring from 
                  professional cricket, he decided to bridge this gap by creating a store that would serve 
                  athletes of all levels.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & Expansion (2015-2020)</h3>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small local store in Mumbai quickly grew into a trusted name across India. 
                  We expanded our product range to include equipment for multiple sports and established 
                  partnerships with leading international brands. Our commitment to quality and customer 
                  service earned us thousands of loyal customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation (2020-Present)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Embracing the digital age, we launched our online platform to reach athletes nationwide. 
                  Today, TitanGear serves customers across 100+ cities, maintaining the same personal 
                  touch and expert guidance that made us successful, now enhanced by the convenience of 
                  online shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;