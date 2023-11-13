const { FILE_TYPES } = require("./constants");

// Importing the required packages
const cloudinary = require("cloudinary").v2;

exports.uploadFilesToCloudinary = async (files, folder, height, quality) => {
  try {
    // Upload the files while preserving their original filenames
    const uploadedFiles = [];
    if (!Array.isArray(files)) files = [files];
    for (const file of files) {
      try {
        const options = {
          folder,
          use_filename: true,
          unique_filename: false,
          resource_type: "auto",
        };
        if (height) options.height = height;
        if (quality) options.quality = quality;
        const response = await cloudinary.uploader.upload(
          file.tempFilePath,
          options
        );
        // console.log("File uploaded successfully:", response);
        uploadedFiles.push(response);
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error; // Propagate the error to the calling code
      }
    }
    return uploadedFiles;
  } catch (error) {
    // Handle any errors that occurred during the Cloudinary upload
    console.error(
      "Something went wrong while uploading files to Cloudinary:",
      error
    );
    throw new Error("Failed to upload files to Cloudinary");
  }
};
