import React from 'react';
import { ArrowRight, Users, Store, Download, PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join the MittiBite Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're craving homemade meals or want to share your culinary skills, 
            MittiBite has something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Customer CTA */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-orange-200 rounded-full transform -translate-x-4 translate-y-4 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Food Lovers</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover authentic homemade meals from talented local cooks. Order fresh, 
                  delicious tiffins delivered right to your doorstep with just a few taps.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Wide variety of homemade cuisines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Fresh meals prepared daily
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Fast & reliable delivery
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Affordable pricing
                  </li>
                </ul>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-lg font-medium group-hover:shadow-lg transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download App & Get Your First Tiffin
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <p className="text-sm text-gray-500 mt-3 text-center">
                  🎉 Use code FIRST20 for 20% off your first order
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vendor CTA */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100 to-emerald-200 rounded-full transform -translate-x-4 translate-y-4 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 flex items-center justify-center">
                  <Store className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Home Cooks</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Turn your passion for cooking into a thriving business. Connect with food lovers 
                  in your area and grow your tiffin service with MittiBite.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Easy registration & setup
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Manage orders efficiently
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Flexible working hours
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Grow your customer base
                  </li>
                </ul>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-medium group-hover:shadow-lg transition-all duration-300">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Join as a Vendor & Grow Your Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <p className="text-sm text-gray-500 mt-3 text-center">
                  ⭐ 0% commission for first 3 months
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Download MittiBite today and experience the taste of home!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex-1">
              Download for iOS
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full font-semibold flex-1">
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;