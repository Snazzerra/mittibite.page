import React from 'react';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565556250026-9ba22083e3e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGluZGlhbiUyMGZvb2R8ZW58MHx8fHwxNzUzODczNTMwfDA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-200">Trusted by 10,000+ families</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Homemade Food,
              <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
                Delivered Fresh
              </span>
              to Your Door
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
              Experience the taste of home with MittiBite. Connect with local tiffin providers 
              and enjoy authentic, homemade meals delivered right to your doorstep.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Download for iOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Download for Android
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-gray-300">Happy Vendors</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold">30min</span>
                </div>
                <p className="text-sm text-gray-300">Avg Delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-gray-300">User Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-2xl p-8 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">MittiBite App</h3>
                    <p className="text-gray-600 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;