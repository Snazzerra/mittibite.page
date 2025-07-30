import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">MittiBite</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">About</a>
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Features</a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 px-4 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 px-4 py-2">About</a>
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 px-4 py-2">Features</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 px-4 py-2">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 px-4 py-2">Contact</a>
              <div className="px-4 pt-2">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full">
                  Download App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;