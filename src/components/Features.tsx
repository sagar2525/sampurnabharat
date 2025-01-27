import React from 'react';
import { Leaf, Award, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'All our products are made from pure, natural ingredients',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked and processed using traditional methods',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free shipping on orders above ₹999',
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: '100% secure payment gateway',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Sampurna Bharat?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}