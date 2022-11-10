const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
  id: Number,  
  unique_id: String,
  wallet_address: String,
  created_at: Date,
  updated_At: Date,
});


module.exports = mongoose.model("user", UserSchema);