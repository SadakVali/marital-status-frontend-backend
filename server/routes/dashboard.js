// const modules
const express = require("express");

// const controllers
const { createNewMarriageEntry } = require("../controllers/Dashboard");

// initialize a router instance
const router = express.Router();

// ######## create routes ########
// admin related routes
router.post("/save-marriage-info", createNewMarriageEntry);

// export the user routes
module.exports = router;
