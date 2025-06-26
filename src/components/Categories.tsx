import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Cricket',
      description: 'Professional cricket bats, balls, protective gear, and accessories',
      image: 'https://media.istockphoto.com/id/1144289750/photo/white-shiny-cricket-ball-for-one-day-international-match-on-isolated-white-background-3d.jpg?b=1&s=612x612&w=0&k=20&c=Ye0zrF_1h_BcUTtPp9pPuSkomCVf3QKglj3BQWmxOsQ=',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      name: 'Football',
      description: 'High-quality footballs, boots, jerseys, and training equipment',
      image:'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      gradient: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      name: 'Badminton',
      description: 'Premium racquets, shuttlecocks, shoes, and court accessories',
      image: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      id: 4,
      name: 'Fitness',
      description: 'Complete range of gym equipment, weights, and fitness accessories',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of professional sports equipment, 
            carefully curated for athletes at every level
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-orange-500 transition-colors">
                  <span>Explore {category.name}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-orange-500/0 group-hover:from-blue-600/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;