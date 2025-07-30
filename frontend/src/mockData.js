// Mock data for MittiBite landing page frontend-only implementation

export const mockStats = {
  totalCustomers: 5000,
  totalProviders: 500,
  totalOrders: 25000,
  rating: 4.8
};

export const mockTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "MittiBite has been a lifesaver! The homemade food reminds me of my mother's cooking. Fresh, healthy, and delivered on time every day.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5db?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    comment: "As a busy professional, MittiBite saves me so much time. The quality is consistent and the variety of meals from different providers is amazing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore",
    rating: 4,
    comment: "I love supporting local home chefs through MittiBite. The food is authentic and you can taste the love in every bite.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export const mockProviders = [
  {
    id: 1,
    name: "Sunita's Kitchen",
    specialty: "North Indian",
    location: "Bandra, Mumbai",
    rating: 4.9,
    orders: 500,
    image: "https://images.pexels.com/photos/17736978/pexels-photo-17736978.jpeg"
  },
  {
    id: 2,
    name: "Home Style Tiffin",
    specialty: "South Indian",
    location: "Koramangala, Bangalore",
    rating: 4.7,
    orders: 350,
    image: "https://images.pexels.com/photos/25020308/pexels-photo-25020308.jpeg"
  },
  {
    id: 3,
    name: "Mom's Recipe",
    specialty: "Gujarati",
    location: "CP, Delhi",
    rating: 4.8,
    orders: 420,
    image: "https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0"
  }
];

export const mockMenuItems = [
  {
    id: 1,
    name: "Dal Chawal Combo",
    description: "Traditional dal with steamed rice, sabzi, and pickle",
    price: 120,
    provider: "Sunita's Kitchen",
    image: "https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0",
    veg: true,
    spiceLevel: "Medium"
  },
  {
    id: 2,
    name: "South Indian Thali",
    description: "Sambar, rasam, rice, curd, and assorted vegetables",
    price: 150,
    provider: "Home Style Tiffin",
    image: "https://images.pexels.com/photos/17736978/pexels-photo-17736978.jpeg",
    veg: true,
    spiceLevel: "Mild"
  },
  {
    id: 3,
    name: "Gujarati Khana",
    description: "Dal, sabzi, roti, rice, and gujarati specialties",
    price: 140,
    provider: "Mom's Recipe",
    image: "https://images.pexels.com/photos/25020308/pexels-photo-25020308.jpeg",
    veg: true,
    spiceLevel: "Mild"
  }
];

export const mockOrders = [
  {
    id: "ORD001",
    customerName: "John Doe",
    items: ["Dal Chawal Combo", "South Indian Thali"],
    total: 270,
    status: "delivered",
    deliveryTime: "2025-01-30 13:30",
    provider: "Sunita's Kitchen"
  },
  {
    id: "ORD002",
    customerName: "Jane Smith",
    items: ["Gujarati Khana"],
    total: 140,
    status: "preparing",
    deliveryTime: "2025-01-30 14:00",
    provider: "Mom's Recipe"
  }
];

// Mock API functions for future backend integration
export const mockAPI = {
  // Customer functions
  getMenuItems: () => Promise.resolve(mockMenuItems),
  placeOrder: (orderData) => {
    console.log("Mock: Order placed", orderData);
    return Promise.resolve({ success: true, orderId: "ORD" + Date.now() });
  },
  trackOrder: (orderId) => {
    console.log("Mock: Tracking order", orderId);
    return Promise.resolve(mockOrders[0]);
  },

  // Provider functions
  getProviders: () => Promise.resolve(mockProviders),
  registerProvider: (providerData) => {
    console.log("Mock: Provider registered", providerData);
    return Promise.resolve({ success: true, providerId: "PRV" + Date.now() });
  },
  
  // Common functions
  getStats: () => Promise.resolve(mockStats),
  getTestimonials: () => Promise.resolve(mockTestimonials),
  
  // Contact form
  submitContactForm: (formData) => {
    console.log("Mock: Contact form submitted", formData);
    return Promise.resolve({ success: true, message: "Thank you for your message!" });
  }
};

export default {
  mockStats,
  mockTestimonials,
  mockProviders,
  mockMenuItems,
  mockOrders,
  mockAPI
};