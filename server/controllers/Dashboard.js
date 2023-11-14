// Importing the utility snippets
const { uploadFilesToCloudinary } = require("../utils/uploadFileToCloudinary");

// Importing the models
const Marriage = require("../models/Marriage");
const Person = require("../models/Person");

exports.createNewMarriageEntry = async (req, res) => {
  try {
    const {
      victimName,
      victimContactNum,
      marriageDate,
      criminalName,
      criminalGender,
    } = req.body;

    // Validate required fields
    if (
      !victimName ||
      !victimContactNum ||
      !marriageDate ||
      !criminalName ||
      !criminalGender ||
      !req?.files?.criminalImages.length ||
      !req?.files?.marriagePhoto.length
    )
      return res.status(400).json({
        success: true,
        message: "All fields are required",
      });

    // Create a new marriage entry
    const newMarriageDetails = await Marriage.create({
      victimName,
      victimContactNum,
      marriageDate,
    });
    // Upload Marriage Photo to the Cloudinary
    marriagePhotoResponse = await uploadFilesToCloudinary(
      req?.files?.marriagePhoto,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}`
    );
    newMarriageDetails.image = marriagePhotoResponse.secure_url;

    // Create a new person entry
    const newCriminalDetails = await Person.create({
      name: criminalName,
      gender: criminalGender,
    });
    criminalPhotosUploadResponse = await uploadFilesToCloudinary(
      req?.files?.criminalImages,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}/${newCriminalDetails._id}`
    );
    newCriminalDetails.images = criminalPhotosUploadResponse.map(
      (res) => res.secure_url
    );
    newCriminalDetails.save();
    newMarriageDetails.ciminalId = newCriminalDetails._id;
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
