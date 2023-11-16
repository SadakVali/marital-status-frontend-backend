// Importing the utility snippets
const { uploadFilesToCloudinary } = require("../utils/uploadFileToCloudinary");

// Importing the models
const Marriage = require("../models/Marriage");
const Person = require("../models/Person");

exports.createNewMarriageEntry = async (req, res) => {
  try {
    const {
      victimName,
      victimContactNumber,
      marriageDate,
      criminalName,
      criminalGender,
    } = req.body;

    // console.log({
    //   victimName,
    //   victimContactNumber,
    //   marriageDate,
    //   criminalName,
    //   criminalGender,
    // });
    // console.log("criminalImages", req?.files?.criminalImages);
    // console.log("marriage_photo", req?.files?.marriagePhoto);

    // Validate required fields
    if (
      !victimName ||
      !victimContactNumber ||
      !marriageDate ||
      !criminalName ||
      !criminalGender ||
      !req?.files?.criminalImages.length ||
      !req?.files?.marriagePhoto
    )
      return res.status(400).json({
        success: true,
        message: "All fields are required",
      });

    // Create a new marriage entry
    const newMarriageDetails = await Marriage.create({
      victimName,
      victimContactNumber,
      marriageDate,
    });
    // Upload Marriage Photo to the Cloudinary
    marriagePhotoResponse = await uploadFilesToCloudinary(
      req?.files?.marriagePhoto,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}`
    );

    // Create a new person entry
    const newCriminalDetails = await Person.create({
      name: criminalName,
      gender: criminalGender,
      marriageId: newMarriageDetails._id,
    });
    criminalPhotosUploadResponse = await uploadFilesToCloudinary(
      req?.files?.criminalImages,
      `${process.env.FOLDER_NAME}/${newMarriageDetails._id}/${newCriminalDetails._id}`
    );
    newCriminalDetails.images = criminalPhotosUploadResponse.map(
      (res) => res.secure_url
    );
    await newCriminalDetails.save();
    newMarriageDetails.image = marriagePhotoResponse.map(
      (res) => res.secure_url
    )[0];
    newMarriageDetails.ciminalId = newCriminalDetails._id;
    await newMarriageDetails.save();

    // Return new Function Hall and success response
    return res.status(201).json({
      success: true,
      message: "New Marriage Details Entry Created Successfully",
      data: newMarriageDetails,
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
