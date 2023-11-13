// import from libraries
const mongoose = require("mongoose");

const marriageSchema = new mongoose.Schema({
  husband: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
  wife: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
  marriageDate: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Marriage", marriageSchema);
