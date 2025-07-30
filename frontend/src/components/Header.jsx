import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold text-amber-800">MittiBite</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">About</a>
            <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Features</a>
            <a href="#faq" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          {/* Download Button */}
          <div className="hidden md:block">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              <Smartphone className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 font-medium">About</a>
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 font-medium">Features</a>
              <a href="#faq" className="text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 font-medium">Contact</a>
              <div className="pt-2">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full">
                  <Smartphone className="w-4 h-4 mr-2" />
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