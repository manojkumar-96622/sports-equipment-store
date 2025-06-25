import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Promotions from '../components/Promotions';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Categories />
      <Promotions />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;