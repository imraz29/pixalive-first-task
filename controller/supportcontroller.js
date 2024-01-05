// controllers/supportController.js
const Service =require('../service/helpservice')

// Controller to create a new support request
exports.createSupportRequest = async (req, res) => {
  const { name, email, issue, phoneno } = req.body;

  

  try {
    if (!name || !email || !issue || !phoneno) {
      return res.json({ error: 'Name, email,phoneno and issue are required.' });}
    
    const supportRequest = await Service.createSupportRequest(name, email, issue,phoneno);
    res.json(supportRequest);
  } catch (error) {
    console.log(error);
  }
};

// Controller to get all support requests
exports.getAllSupportRequests = async (req, res) => {
  try {
    const supportRequests = await Service.getAllSupportRequests();
    res.json(supportRequests);
  } catch (error) {
    res.json({ error: 'Failed to fetch support requests.' });
  }
};
