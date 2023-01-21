import Controller from "../../libraries/controller/index";
import User from '../models/user';
import { HTTP_ACCEPTED, HTTP_CREATED } from "../../constants/HttpCode";


export default class userController extends Controller {
  /**
   * POST / getAllUserUser
   * @dev API method to get all users ..
   */
   async register (req, res, next) {
    try{
        let user = await User.findOne({ email_address: req.body.email_address });
        if (user) {
            return res.status(400).send('That user already exists!');
        } else {
             // Insert the new user if they do not exist yet
            user = new User({
              email_address: req.body.email_address,
              password: req.body.password,
              name: req.body.name,
              role: req.body.role
            });
            await user.save();
            res.send(user);
        }
    } catch (error) {return res.status(422).json({ error });}
  }
    
}
