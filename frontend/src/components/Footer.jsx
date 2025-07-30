import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-bold">MittiBite</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connecting food lovers with authentic homemade meals from trusted local tiffin providers. 
              Experience the taste of home, delivered fresh to your door.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Features</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Users</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Download App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Order Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Help & Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Become Vendor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Subscription Plans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Food Street,</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:hello@mittibite.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  hello@mittibite.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-orange-400 mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">Mon - Sun: 7:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MittiBite. All rights reserved. Made with ❤️ for food lovers.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Terms</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;