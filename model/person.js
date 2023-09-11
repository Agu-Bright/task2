const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last Name"],
  },
  otherName: {
    type: String,
  },
  uniqueName: {
    type: String,
    required: [true, "Please enter a uniqueName"],
    unique: [true, "This person already exists"],
  },
  email: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Please tell us something about yourself"],
  },
});

module.exports = new mongoose.model("Person", personSchema);
