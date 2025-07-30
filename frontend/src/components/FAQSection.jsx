import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How does MittiBite work?",
      answer: "MittiBite connects you with local home cooks who prepare fresh, homemade meals. Simply browse available tiffin services in your area, place an order through our app, and get delicious homemade food delivered to your doorstep."
    },
    {
      question: "How do I ensure the quality and safety of the food?",
      answer: "All our partner home cooks go through a verification process. We check their kitchen hygiene standards, taste their food, and ensure they follow food safety guidelines. Plus, we have customer reviews and ratings to help you make informed choices."
    },
    {
      question: "What types of cuisine are available?",
      answer: "Our platform features a wide variety of Indian regional cuisines including North Indian, South Indian, Gujarati, Punjabi, Bengali, and more. Each home cook specializes in their traditional recipes, offering authentic flavors."
    },
    {
      question: "How much does delivery cost?",
      answer: "Delivery charges vary based on distance and order value. Typically, delivery fees range from ₹20-50. Orders above ₹300 often qualify for free delivery from participating vendors."
    },
    {
      question: "Can I schedule orders in advance?",
      answer: "Yes! You can place orders up to 3 days in advance. This helps home cooks prepare better and ensures you get your preferred meal times. You can also set up recurring orders for regular tiffin services."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Customer satisfaction is our priority. If you're not happy with your order, contact our support team within 2 hours of delivery. We'll work with the vendor to resolve the issue and may offer a refund or replacement."
    },
    {
      question: "How can I become a vendor on MittiBite?",
      answer: "To become a vendor, download the MittiBite app, create a vendor account, upload photos of your dishes, set your menu and prices, and complete the verification process. Once approved, you can start receiving orders!"
    },
    {
      question: "What are the payment options?",
      answer: "We accept various payment methods including UPI, credit/debit cards, net banking, and digital wallets. You can also pay cash on delivery where available. All transactions are secure and encrypted."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            about MittiBite and our homemade tiffin delivery service.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@mittibite.com" 
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Email Support
            </a>
            <a 
              href="tel:+919999999999" 
              className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-200 font-medium"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;