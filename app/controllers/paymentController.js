// const Student = require('./models/student');
// const Payment = require('./models/payment');
// const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

// const paymentController = {
//   async makePayment(req, res) {
//     const { studentId, amount } = req.body;
//     const student = await Student.findById(studentId);

//     if (!student) {
//       return res.status(404).send('Student not found');
//     }

//     // Create a Stripe charge
//     const charge = await stripe.charges.create({
//       amount: amount * 100, // convert to cents
//       currency: 'usd',
//       description: 'LMS payment',
//       source: req.body.token
//     });

//     // Create a new payment record in the database
//     const payment = new Payment({
//       student: student._id,
//       amount,
//       transactionId: charge.id
//     });
//     await payment.save();

//     // Update the student's payment status
//     student.isPaid = true;
//     await student.save();

//     res.send('Payment successful');
//   },

//   async verifyPayment(req, res) {
//     const { studentId } = req.body;
//     const student = await Student.findById(studentId);

//     if (!student) {
//       return res.status(404).send('Student not found');
//     }

//     if (!student.isPaid) {
//       return res.status(400).send('Student has not made a payment');
//     }

//     res.send('Payment verified');
//   }
// };

// module.exports = paymentController;
 const paymentService = require('../services/payment.service');

 const paymentInstance = new paymentService();

 export default class paymentController extends Controller {
  /**
   * POST / getAllUserUser
   * @dev API method to get all users ..
   */
   async startPayment (req, res, next) {
    try{
      const response = await paymentInstance.startPayment(req.body);
      res.status(201).json({status: 'success', data: response});
    }catch(error){
      res.status(500).json({status: 'failed', message: error.message})
    }
   }

   async cretePayment (req, res, next) {
    try{
      const response = await paymentInstance.createPayment(req.query);
      res.status(201).json({status: 'success', data: response});
    }catch(error){
      res.status(500).json({status: 'failed', message: error.message})
    }
   }

   async getPayment (req, res, next) {
    try{
      const response = await paymentInstance.paymentPayment(req.body);
      res.status(201).json({status: 'success', data: response});
    }catch(error){
      res.status(500).json({status: 'failed', message: error.message})
    }
   }
    
}
