import Controller from "../../libraries/controller/index";
import Student from '../models/student';

const Paystack = require('paystack')('sk_test_9ec05adfaa38f953e4c5e8e878f6f1901ee55dd2');

// const paymentService = require('../services/payment.service');

// const paymentInstance = new paymentService();

import { HTTP_ACCEPTED, HTTP_CREATED } from "../../constants/HttpCode";


export default class userController extends Controller {
  /**
   * POST / getAllUserUser
   * @dev API method to get all users ..
   */
   async register (req, res, next) {
    try{
        let student = await Student.findOne({ email: req.body.email });
        if (student) {
            return res.status(400).send('That user already exists!');
        } else {
             // Insert the new user if they do not exist yet 
            student = new Student({
              email: req.body.email,
              password: req.body.password,
              name: req.body.name,
            });
            const application_fee = await Paystack.transaction.initialize({
              email: 'req.body.email',
              amount: 750000 // in kobo
            }).then(function(body){
              // send the authorization_url in the response to the client to redirect them to
              // the payment page where they can make the payment
              res.redirect(body.data.authorization_url);
            });
            await student.save();
            await application_fee.wait();
            res.send(student);
        }
    } catch (error) {return res.status(422).json({ error });}
  }
    
}
