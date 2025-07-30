import React from 'react';
import { Apple, Play, Star, Users, Utensils } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Trusted by 10,000+ families</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Homemade Food,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  Delivered Fresh
                </span>{' '}
                to Your Door
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience authentic homemade Indian meals from local tiffin providers. 
                Fresh, healthy, and made with love - just like home.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">500+ Tiffin Providers</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1729154031163-1c5484fac8dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx0aWZmaW4lMjBib3h8ZW58MHx8fHwxNzUzODYzMTAzfDA&ixlib=rb-4.1.0&q=85"
                alt="Traditional Tiffin Box"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Fresh & Hot</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">4.8 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;