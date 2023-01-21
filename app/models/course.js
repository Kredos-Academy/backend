const mongoose = require(mongoose)

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    batch: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});
module.exports = mongoose.model('course', courseSchema);