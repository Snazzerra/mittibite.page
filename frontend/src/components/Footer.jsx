import React from 'react';
import { Heart, Smartphone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-bold text-white">MittiBite</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Connecting food lovers with passionate home cooks. Experience authentic 
              homemade Indian cuisine delivered fresh to your doorstep.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <span>Made with</span>
              <Heart className="w-5 h-5 fill-current" />
              <span>for food lovers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Features</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Vendor Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Food Safety</a></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Download MittiBite App</h3>
              <p className="text-gray-400 mb-6">
                Get access to the best homemade food in your area. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-xs text-gray-400">Download on the</p>
                      <p className="text-lg font-semibold">App Store</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-xs text-gray-400">Get it on</p>
                      <p className="text-lg font-semibold">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <img 
                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnl8ZW58MHx8fHwxNzUzODczNTQxfDA&ixlib=rb-4.1.0&q=85"
                alt="Food Delivery"
                className="w-64 h-40 object-cover rounded-xl mx-auto md:mx-0 opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get updates about new vendors and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-r-lg transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MittiBite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;