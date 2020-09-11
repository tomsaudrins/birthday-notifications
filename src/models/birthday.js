const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "birthday"
  }
});

const Birthday = mongoose.model('Birthday', birthdaySchema);
module.exports = Birthday;
