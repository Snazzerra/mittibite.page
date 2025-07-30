import React from 'react';
import { Smartphone, Store, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  const customerBenefits = [
    "Access to 500+ local tiffin providers",
    "Fresh meals delivered daily",
    "Affordable pricing starting at ₹80/meal",
    "Track your order in real-time"
  ];

  const vendorBenefits = [
    "Zero commission on first 100 orders",
    "Free app listing and promotion",
    "Flexible delivery options",
    "Growing customer base"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking for delicious homemade meals or want to share your cooking with the community, 
            MittiBite has something for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customer CTA */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Food Lovers</h3>
              <p className="text-lg text-gray-600 mb-6">
                Craving authentic homemade meals? Download MittiBite and get your first tiffin delivered!
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {customerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download App & Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500 mt-3">Special offer: 20% off on your first order!</p>
            </div>
          </div>

          {/* Vendor CTA */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Tiffin Providers</h3>
              <p className="text-lg text-gray-600 mb-6">
                Turn your passion for cooking into a thriving business. Join MittiBite as a vendor today!
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {vendorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Join as Vendor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500 mt-3">Start earning within 24 hours of registration!</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join the MittiBite Community Today
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Be part of a growing network that celebrates authentic homemade food and supports local entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold">
                Download App
              </Button>
              <Button variant="outline" className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-xl font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;