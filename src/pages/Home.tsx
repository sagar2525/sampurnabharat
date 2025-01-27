import React from 'react';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Features />
    </>
  );
}