// import from libraries
const mongoose = require("mongoose");

const marriageSchema = new mongoose.Schema({
  ciminalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
  victimName: {
    type: String,
    required: true,
    trim: true,
  },
  victimContactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  marriageDate: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    // required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Marriage", marriageSchema);
