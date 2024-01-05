// services/supportService.js
const SupportRequest = require('../model/helpmodel');

// Service to create a new support request
exports.createSupportRequest = async (name, email, issue,phoneno) => {
  const supportRequest = new SupportRequest({name,email,issue,phoneno});
  return await supportRequest.save();
};

// Service to get all support requests
exports.getAllSupportRequests = async () => {
  return await SupportRequest.find({});
};
