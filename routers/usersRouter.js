/**
 * Title: Users handler router
 * Description: All user request response router
 * Author: Jagadis Chakma
 * Date: 04-06-2021
 * Version: 1.0.0
 * License: Learn With Sumit
 */

// dependencies
const express = require("express");
const userHomeController = require("../controllers/user/userHomeController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// router
const router = express.Router();

// home user page
router.get("/", decorateHtmlResponse("Users Page"), userHomeController);

// module exports
module.exports = router;
