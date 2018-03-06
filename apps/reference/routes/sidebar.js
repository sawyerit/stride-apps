const express = require("express");
const router = express.Router();
const cors = require("cors");
const logger = require("../middleware/logger").logger;
const moduleName = "module:sidebar";
/**
 * Sidebar
 * When a user clicks on the glance, Stride opens an iframe in the sidebar, and loads a page from your app,
 * from the URL specified in the app descriptor.
 * @see {@link https://developer.atlassian.com/cloud/stride/apis/jsapi/about-javascript-api/ | API Reference: Sidebar  }
 * @see {@link https://developer.atlassian.com/cloud/stride/learning/glances-sidebars/ | Concept Guide }
 * @see {@link https://developer.atlassian.com/cloud/stride/learning/adding-sidebars/ | How-to Guide }
 *
 * ``` "chat:sidebar": [
 *     {
 * 		    "key": "reference-sidebar",
 * 		    "name": {
 * 		      "value": "App Sidebar"
 * 		    },
 * 		    "url": "/module/sidebar",
 * 		    "authentication": "jwt"
 * 		  }
 *    ]
 * ```
 **/

router.get("/sidebar", cors(), (req, res) => {
	res.redirect("/public/templates/app-module-sidebar.html");
	logger.info(`${moduleName} redirect successful`);
});

module.exports = router;
