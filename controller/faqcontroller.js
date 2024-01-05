
const faqService = require('../service/faqservice');
exports.getAllFAQs = (req, res) => {
  const faqs = faqService.getAllFAQs();
  res.json(faqs);
};
