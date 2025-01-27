import React, { useState } from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Basic navigation using window.location
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const handleNavigation = (path) => {
    // Basic navigation using window.location
    window.location.href = path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div onClick={() => handleNavigation('/')} className="flex-shrink-0 flex items-center cursor-pointer">
              <img
                src="/images/logo.png"
                alt="Sampurna Bharat"
                className="h-28 md:h-36 lg:h-48"
                style={{ maxHeight: '160px', maxWidth: 'auto' }}
              />
            </div>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <button onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-amber-800">Home</button>
            <button onClick={() => handleNavigation('/shop')} className="text-gray-700 hover:text-amber-800">Shop</button>
            <button onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-amber-800">About</button>
            <button onClick={() => handleNavigation('/blog')} className="text-gray-700 hover:text-amber-800">Blog</button>
            <button onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-amber-800">Contact</button>
          </div>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button type="submit" className="p-2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            <button onClick={() => handleNavigation('/cart')} className="p-2 relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-amber-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}