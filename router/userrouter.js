const controller=require('../controller/usercontroller')
const faq=require('../controller/faqcontroller')
const help=require('../controller/supportcontroller')
const e=require('express')
const router=e.Router()
router.post('/register',controller.register)
//router.post('/login',controller.login)
router.post('/update',controller.update)
router.get('/faq',faq.getAllFAQs)
router.get('/support',help.getAllSupportRequests)
router.post('/support',help.createSupportRequest)

module.exports=router