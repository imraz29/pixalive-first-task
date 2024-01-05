// services/faqService.js
const FAQ = require('../model/faqmodel');

// Sample FAQ data
const faqData = [
  new FAQ('Can we earn money online watching ads in India?', 'Yes you will earn money online watching ads in india.'),
  new FAQ('is this legal in india?', 'Yes, its Legal in India.'),
  new FAQ('How much can I earn by watching ads for 1 hour?', 'You get paid ₹10 per video watched'),
];

// Service to get all FAQs
exports.getAllFAQs = () => {
  return faqData;
};
