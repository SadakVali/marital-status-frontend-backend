// const modules
const express = require("express");

// const controllers
const { marriageInfoByPersonId } = require("../controllers/User");

// initialize a router instance
const router = express.Router();

// ######## create routes ########
// ML developer related routes
router.post("/get-marriage-info", marriageInfoByPersonId);

// export the user routes
module.exports = router;
