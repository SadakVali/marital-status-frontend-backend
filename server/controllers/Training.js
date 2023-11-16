// Importing the models
const Person = require("../models/Person");

// Fetch Booking History of a single Venue of specified month & Year
exports.getFaceRecognitionDB = async (req, res) => {
  try {
    const database = await Person.find({}, "marriageId images").exec();
    console.log({ database });
    if (!database)
      return res.status(404).json({
        success: false,
        message: "No Database Available",
      });

    // Return a success response
    return res.status(200).json({
      success: true,
      message: "DB Fetched Succesfully",
      data: database,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching database",
      error: error.message,
    });
  }
};
