import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does MittiBite ensure food quality and safety?",
      answer: "We have strict quality guidelines for all our tiffin providers. Each provider goes through a verification process, and we regularly monitor hygiene standards. All meals are prepared fresh daily using quality ingredients."
    },
    {
      question: "What areas do you deliver to?",
      answer: "Currently, we deliver across major cities including Mumbai, Delhi, Bangalore, Pune, and Hyderabad. We're rapidly expanding to more locations. Check the app for availability in your area."
    },
    {
      question: "How much does delivery cost?",
      answer: "Delivery charges start from just ₹15 and vary based on distance. We offer free delivery on orders above ₹200. Premium subscribers get free delivery on all orders."
    },
    {
      question: "Can I customize my tiffin meals?",
      answer: "Yes! Many of our tiffin providers offer customization options. You can specify dietary preferences, spice levels, and special requirements when placing your order."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Customer satisfaction is our priority. If you're not happy with your order, contact our support team within 2 hours of delivery. We offer full refunds or replacements based on the issue."
    },
    {
      question: "How can I become a tiffin provider on MittiBite?",
      answer: "Download the MittiBite Vendor app, complete the registration process with required documents, and our team will verify your kitchen. Once approved, you can start accepting orders within 24-48 hours."
    },
    {
      question: "Are there any subscription plans available?",
      answer: "Yes, we offer weekly and monthly subscription plans with significant discounts. Subscribers also get priority delivery, free delivery, and exclusive menu access from premium providers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets. Cash on delivery is also available in select areas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about MittiBite.
          </p>
        </div>

        <div className="bg-orange-50 rounded-3xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
          >
            <span>Contact our support team</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;