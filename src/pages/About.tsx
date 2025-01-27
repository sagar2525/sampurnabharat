import React from 'react';

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Sampurna Bharat</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            At Sampurna Bharat, we are committed to bringing you the finest natural products,
            sourced directly from the heart of India. Our journey began with a simple mission:
            to provide authentic, pure, and traditional Indian products to every home.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded with the vision of preserving India's rich culinary heritage,
            Sampurna Bharat has grown from a small family business to a trusted name in
            natural and traditional products. We work directly with farmers and artisans,
            ensuring that every product meets our high standards of quality and authenticity.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Promise</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>100% natural ingredients</li>
            <li>Traditional processing methods</li>
            <li>Direct sourcing from farmers</li>
            <li>No artificial additives or preservatives</li>
            <li>Sustainable packaging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}