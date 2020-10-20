const mongoose = require('mongoose');

//New Mongoose Schema for Exercises
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true, minlength: 3 },
  duration: { type: Number, required: true, },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;