import Controller from "../../libraries/controller/index";
const Student = require('../models/student');
const Payment = require('../models/payment');
// // const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');
const Paystack = require('paystack')('sk_test_9ec05adfaa38f953e4c5e8e878f6f1901ee55dd2');


export default class paymentController extends Controller{
    async applicationPayment(req, res) {
        try{
            // const student = await Student.findOne({ email: req.body.email});
    
            // if (!student) {return res.status(404).send('Student not found');}
    
        // Create a paystack charge
            await Paystack.transaction.initialize({
                email: req.body.email,
                amount: 750000, // in kobo
             }).then(function(body){
            // send the authorization_url in the response to the client to redirect them to
            // the payment page where they can make the payment
                res.send(body.data.authorization_url);
             });
        } catch (error) {return res.status(422).json({ error });}
    } 
    
    async coursePayment(req, res) {
        try{
            const student = await Student.findOne({ email: req.body.email});
    
            if (!student) {return res.status(404).send('Student not found');}
    
        // Create a paystack charge
            await Paystack.transaction.initialize({
                email: req.body.email,
                amount: 3375000,
                plan: "PLN_4zpxti8kowo9hue" // in kobo
             }).then(function(body){
            // send the authorization_url in the response to the client to redirect them to
            // the payment page where they can make the payment
                res.send(body.data.authorization_url);
             });

            // const payment = new Payment({
            //     student: student.email,
            //     amount,
            //   });
            // await payment.save();
          
            //   // Update the student's payment status
            // student.Paid = true;
            // await student.save();
        } catch (error) {return res.status(422).json({ error });}
    } 

    async paymentCallback(req, res) {
        try{
             //  Create a new payment record in the database
            const payment = await Paystack.transaction.verify(req.query.reference);

             // Check if the payment was successful
            if (payment.data.status === 'success') {
               // Redirect the user to the registration page
                res.redirect('https://www.kredosacademy.com/Application');
            } else {
               res.send('Payment failed');
            }
        } catch (error) {return res.status(422).json({ error });}
    }

    async createPayment(req, res) {
        try{
             //  Create a new payment record in the database
            const payment = new Payment({
                student: student.email,
                amount,
                reference: coursefee.reference
            });
            await payment.save();

            // Update the student's payment status
            student.paid = true;
            await student.save();

            res.send('Payment successful');
        } catch (error) {return res.status(422).json({ error });}

    }
}   
// const paymentController = {
//   async makePayment(req, res) {
//     // const { email, amount } = req.body;
//     const student = await Student.findOne({ email: req.body.email});

//     if (!student) {
//       return res.status(404).send('Student not found');
//     }

//     // Create a paystack charge
//     const application_fee = await Paystack.transaction.initialize({
//         email: 'req.body.email',
//         amount: 750000, // in kobo
//         reference: ''+Math.floor((Math.random() * 1000000000) + 1),
         
//       }).then(function(body){
//         // send the authorization_url in the response to the client to redirect them to
//         // the payment page where they can make the payment
//         res.redirect(body.data.authorization_url);
//       });

    // Create a new payment record in the database
    // const payment = new Payment({
    //   student: student._id,
    //   amount,
    //   transactionId: charge.id
    // });
    // await payment.save();

    // // Update the student's payment status
    // student.isPaid = true;
    // await student.save();

// //     res.send('Payment successful');
// //   },

// //   async verifyPayment(req, res) {
// //     const { studentId } = req.body;
// //     const student = await Student.findById(studentId);

// //     if (!student) {
// //       return res.status(404).send('Student not found');
// //     }

// //     if (!student.isPaid) {
// //       return res.status(400).send('Student has not made a payment');
// //     }

// //     res.send('Payment verified');
//   }
// };

// module.exports = paymentController;
//  const paymentService = require('../services/payment.service');

//  const paymentInstance = new paymentService();

//  export default class paymentController extends Controller {
//   /**
//    * POST / getAllUserUser
//    * @dev API method to get all users ..
//    */
//    async startPayment (req, res, next) {
//     try{
//       const response = await paymentInstance.startPayment(req.body);
//       res.status(201).json({status: 'success', data: response});
//     }catch(error){
//       res.status(500).json({status: 'failed', message: error.message})
//     }
//    }

//    async createPayment (req, res, next) {
//     try{
//       const response = await paymentInstance.createPayment(req.query);
//       res.status(201).json({status: 'success', data: response});
//     }catch(error){
//       res.status(500).json({status: 'failed', message: error.message})
//     }
//    }

//    async getPayment (req, res, next) {
//     try{
//       const response = await paymentInstance.paymentPayment(req.body);
//       res.status(201).json({status: 'success', data: response});
//     }catch(error){
//       res.status(500).json({status: 'failed', message: error.message})
//     }
//    }
    
// }

