import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cricket', 'Football', 'Badminton', 'Fitness'];

  const products = [
    {
      id: 1,
      name: 'SG Cricket Bat English Willow',
      category: 'Cricket',
      price: 8999,
      originalPrice: 10999,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/5367678/pexels-photo-5367678.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Nivia Storm Football Size 5',
      category: 'Football',
      price: 1299,
      originalPrice: 1599,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Sale'
    },
    {
      id: 3,
      name: 'Yonex Arcsaber 11 Racquet',
      category: 'Badminton',
      price: 15999,
      originalPrice: 18999,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Adjustable Dumbbells Set 20kg',
      category: 'Fitness',
      price: 4999,
      originalPrice: 6999,
      rating: 4.7,
      reviews: 178,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: '30% Off'
    },
    {
      id: 5,
      name: 'MRF Cricket Helmet Pro',
      category: 'Cricket',
      price: 3499,
      originalPrice: 4299,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.pexels.com/photos/5367678/pexels-photo-5367678.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'New'
    },
    {
      id: 6,
      name: 'Football Training Cones Set',
      category: 'Football',
      price: 899,
      originalPrice: 1199,
      rating: 4.4,
      reviews: 45,
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Bundle'
    },
    {
      id: 7,
      name: 'Li-Ning Badminton Shoes',
      category: 'Badminton',
      price: 2799,
      originalPrice: 3499,
      rating: 4.6,
      reviews: 112,
      image: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Comfort'
    },
    {
      id: 8,
      name: 'Resistance Bands Set',
      category: 'Fitness',
      price: 1299,
      originalPrice: 1799,
      rating: 4.3,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Versatile'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Best Seller': 'bg-green-500',
      'Sale': 'bg-red-500',
      'Premium': 'bg-purple-500',
      'New': 'bg-blue-500',
      'Bundle': 'bg-orange-500',
      'Comfort': 'bg-indigo-500',
      'Versatile': 'bg-pink-500',
      '30% Off': 'bg-red-500'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Equipment</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our extensive collection of professional sports equipment for all your athletic needs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>
                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-sm text-blue-600 font-medium mb-2">{product.category}</div>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;