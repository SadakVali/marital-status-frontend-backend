// import from libraries
const mongoose = require("mongoose");

// import constants
import { GENDER } from "../utils/constants";

const userSchema = new mongoose.Schema({
  marriageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Marriage",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: [GENDER.FEMALE, GENDER.MALE],
    required: true,
  },
  images: [
    {
      type: String,
      // required: true,
      trim: true,
    },
  ],
});

module.exports = mongoose.model("Person", userSchema);
