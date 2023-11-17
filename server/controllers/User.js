// imports from packages
const { ObjectId } = require("mongodb");

// Importing the models
const Marriage = require("../models/Marriage");

// Fetch Booking History of a single Venue of specified month & Year
exports.marriageInfoByPersonId = async (req, res) => {
  try {
    let { marriageIds } = req.body;
    // console.log({ marriageIds });
    marriageIds = JSON.parse(marriageIds);
    // console.log({ marriageIds });
    // console.log(typeof marriageIds["0"]);
    // console.log(marriageIds["0"].length);
    for (i = 0; i < marriageIds.length; i++) {
      marriageIds[`${i}`] = new ObjectId(marriageIds[`${i}`]);
    }
    // console.log({ marriageIds });
    // Find marriages where the given personId matches either husband or wife
    const marriages = await Marriage.find({ _id: { $in: marriageIds } })
      .populate("ciminalId")
      .exec();
    // console.log({ marriages });
    if (!marriages)
      return res.status(404).json({
        success: false,
        message: "No related Data Available",
      });
    // Return a success response
    return res.status(200).json({
      success: true,
      message: "Info Fetched Succesfully",
      data: marriages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching marriage info",
      error: error.message,
    });
  }
};
