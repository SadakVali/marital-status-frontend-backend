// const modules
const express = require("express");

// const controllers
const { getFaceRecognitionDB } = require("../controllers/Training");

// initialize a router instance
const router = express.Router();

// ######## create routes ########
// ML developer related routes
router.post("/get-database", getFaceRecognitionDB);

// export the user routes
module.exports = router;
