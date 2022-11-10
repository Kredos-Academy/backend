const mongoose = require("mongoose");

const PoolSchema = mongoose.Schema({
  id: Number,
  unique_id: String,
  sc_pool_id: {
    type: String,
    required: true,
  },
  creator_unique_id: String,
  amount: Number,
  payment_cycle: Number,
  apr: Number,
  duration_in_secs: Number,
  duration_in_months: Number,
  status: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("pool", PoolSchema);
