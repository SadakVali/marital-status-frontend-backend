// Importing the models
const Marriage = require("../models/Marriage");

// Fetch Booking History of a single Venue of specified month & Year
exports.marriageInfoByPersonId = async (req, res) => {
  try {
    const { personIds } = req.personIds;
    // Find marriages where the given personId matches either husband or wife
    const marriages = await Marriage.find({ ciminalId: { $in: personIds } })
      .populate("ciminalId")
      .exec();
    console.log({ marriages });
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
