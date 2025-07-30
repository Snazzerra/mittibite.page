import React from 'react';
import { Heart, Shield, Truck, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every meal is prepared with care by local home chefs who understand the art of traditional cooking."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "We ensure all our tiffin providers follow strict hygiene standards and use fresh ingredients."
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Hot, fresh meals delivered right to your doorstep within 30 minutes of preparation."
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Reliable delivery service that respects your schedule and meal times."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              MittiBite
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            MittiBite is a revolutionary homemade tiffin delivery mobile app that bridges the gap between 
            food lovers craving authentic home-cooked meals and passionate local tiffin providers who 
            prepare meals with the same love and care as they would for their own families.
          </p>
        </div>

        {/* Image and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Connecting Communities Through Food
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a world of fast food and instant meals, we believe there's nothing quite like 
              the taste and nutrition of homemade food. MittiBite connects you with trusted 
              local tiffin providers who prepare fresh, authentic Indian meals daily.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform empowers home-based food entrepreneurs while ensuring customers 
              enjoy healthy, delicious meals that remind them of home. Every bite tells a 
              story of tradition, care, and community.
            </p>
            <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500">
              <p className="text-orange-800 font-medium">
                "From soil to soul - that's the essence of MittiBite. We bring the warmth 
                of homemade cooking to your dining table."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBtZWFsc3xlbnwwfHx8fDE3NTM4NjMxMTF8MA&ixlib=rb-4.1.0&q=85"
              alt="Homemade Indian Meal"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;