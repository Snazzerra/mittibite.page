import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help you enjoy 
            the best homemade food experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">+91 99999 99999</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent queries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">support@mittibite.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Head Office</h4>
                    <p className="text-gray-600">123 Food Street, Foodie Colony</p>
                    <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Operating Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 6:00 AM - 11:00 PM</p>
                    <p className="text-sm text-gray-500">Order processing & customer support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Stay updated with the latest recipes, vendor stories, and special offers!
              </p>
            </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="h-80 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;