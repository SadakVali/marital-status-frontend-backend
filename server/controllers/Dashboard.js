// Importing the utility snippets
const { uploadFilesToCloudinary } = require("../utils/uploadFileToCloudinary");

// Importing the models
const Marriage = require("../models/Marriage");
const Person = require("../models/Person");

exports.createNewMarriageEntry = async (req, res) => {
  try {
    const {
      wifeName,
      husbandName,
      wifeContactNo,
      husbandContactNo,
      marriageDate,
    } = req.body;

    // Validate required fields
    if (
      !wifeName ||
      !husbandName ||
      !wifeContactNo ||
      !husbandContactNo ||
      !req?.files?.wifeImages.length ||
      !req?.files?.husbandImages.length ||
      !marriageDate ||
      !req?.files?.marriagePhoto.length
    )
      return res.status(400).json({
        success: true,
        message: "All fields are required",
      });

    // Create a new marriage entry
    const newMarriageDetails = await Marriage.create({
      wife: null,
      husband: null,
      marriageDate,
      image: null,
    });

    // Upload Images to the Cloudinary
    marriagePhotoResponse = await uploadFilesToCloudinary(
      req?.files?.marriagePhoto,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}`
    );
    husbandPhotoResponse = await uploadFilesToCloudinary(
      req?.files?.marriagePhoto,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}/${husbandName}`
    );
    wifePhotoResponse = await uploadFilesToCloudinary(
      req?.files?.marriagePhoto,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}/${wifeName}`
    );

    // Create a new person entry
    const newHusbandDetails = await Person.create({
      name: husbandName,
      contactNumber: husbandContactNo,
      gender: "Male",
      images: husbandPhotoResponse.map((res) => res.secure_url),
    });

    // Create a new person entry
    const newWifeDetails = await Person.create({
      name: wifeName,
      contactNumber: wifeContactNo,
      gender: "Female",
      images: wifePhotoResponse.map((res) => res.secure_url),
    });

    newMarriageDetails.image = marriagePhotoResponse.secure_url;
    newMarriageDetails.husband = newHusbandDetails._id;
    newMarriageDetails.wife = newWifeDetails._id;
    newMarriageDetails.save();

    // Return new Function Hall and success response
    return res.status(201).json({
      success: true,
      message: "New Marriage Details Entry Created Successfully",
      data: { newMarriageDetails, newHusbandDetails, newWifeDetails },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create a new Marriage Details entry",
      error: error.message,
    });
  }
};
