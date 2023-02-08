const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  paid:{
    type: String,
    default: false,
    required: true
  }
}, { timestamps: {} })

studentSchema.pre('save', async function(next) {
     try {
       // check method of registration
       const user = this;
       if (!user.isModified('password')) next();
       // generate salt
       const salt = await bcrypt.genSalt(10);
       // hash the password
       const hashedPassword = await bcrypt.hash(this.password, salt);
       // replace plain text password with hashed password
       this.password = hashedPassword;
       next();
     } catch (error) {
       return next(error);
     }
   });

  studentSchema.methods.matchPassword = async function (password) {
     try {
       return await bcrypt.compare(password, this.password);
     } catch (error) {
       throw new Error(error);
     }
    };

module.exports = mongoose.model('student', studentSchema);
