/**
 * Title: Login route handler
 * Description: login route as well as home route
 * Author: Jagadish Chakma
 * Date: 04-06-2021
 * Version: 1.0.0
 * License: Learn with sumit
 */

// dependencies
const express = require("express");
const loginController = require("../controllers/login/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// router
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login Page"), loginController);

// module exports
module.exports = router;
