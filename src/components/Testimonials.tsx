import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Cricket Coach',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'TitanGear has been my go-to store for all cricket equipment. The quality is exceptional and the prices are very reasonable. My entire team now uses equipment from ProGear!',
      category: 'Cricket'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Badminton Player',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'I bought my Yonex racquet from ProGear and the difference in my game is remarkable. The staff helped me choose the perfect racquet for my playing style. Highly recommended!',
      category: 'Badminton'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Fitness Enthusiast',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The gym equipment from ProGear is top-notch. I set up my home gym with their products and the quality is comparable to professional gyms. Great customer service too!',
      category: 'Fitness'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Athletes Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their TitanGear experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.category}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Satisfied Athletes
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the TitanGear difference and take your game to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;