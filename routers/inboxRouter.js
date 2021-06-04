/**
 * Title: Inbox router
 * Description: All inbox router will be here
 * Author: Jagadish Chakma
 * Date: 04-06-2021
 * Version: 1.0.0
 * License: Learn With Sumit
 */

// dependencies
const express = require("express");
const inboxHomeController = require("../controllers/inbox/inboxHomeController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// router
const router = express.Router();

// inbox home page
router.get("/", decorateHtmlResponse("Inbox Page"), inboxHomeController);

// module exports
module.exports = router;
