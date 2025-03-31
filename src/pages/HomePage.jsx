import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div>
      <Hero />
      <Mission />
      <Features />
      <Testimonials />
    </div>
  );
}

export default HomePage;