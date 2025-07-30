import React from 'react';
import { Heart, Shield, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every tiffin is prepared by experienced home cooks who put love and care into each meal"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "We ensure all our partner kitchens maintain the highest standards of hygiene and quality"
    },
    {
      icon: Clock,
      title: "Fresh & On-Time",
      description: "Hot, fresh meals delivered right to your doorstep within 30 minutes of preparation"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Supporting local home-based businesses and bringing communities together through food"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About <span className="text-amber-600">MittiBite</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MittiBite is more than just a food delivery app – it's a bridge connecting food lovers 
                with passionate home cooks in their neighborhood. Our platform celebrates the authentic 
                taste of homemade Indian cuisine while supporting local entrepreneurs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Home Kitchens</h3>
                  <p className="text-gray-600">Connect with trusted local home cooks who prepare authentic, traditional meals with fresh ingredients.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Mobile App</h3>
                  <p className="text-gray-600">Simple, intuitive interface to browse menus, place orders, track deliveries, and connect with vendors.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Delivery</h3>
                  <p className="text-gray-600">Fast, reliable delivery service ensuring your homemade meals reach you hot and fresh.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1631451457509-454a498df1c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxob21lbWFkZSUyMGluZGlhbiUyMGZvb2R8ZW58MHx8fHwxNzUzODczNTMwfDA&ixlib=rb-4.1.0&q=85"
                alt="Homemade Indian Food"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl z-0"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;