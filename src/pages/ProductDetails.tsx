import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          </div>
          <button className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}