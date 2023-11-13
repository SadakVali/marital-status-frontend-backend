// import from libraries
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

module.exports = mongoose.model("Person", userSchema);
