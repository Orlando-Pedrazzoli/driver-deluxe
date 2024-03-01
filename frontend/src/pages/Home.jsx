import React from 'react';
import Hero from '../components/Hero';
import ServiceList from '../components/ServiceList';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div>
      <Hero />
      <ServiceList />
      <Reviews />
    </div>
  );
}

export default Home;
