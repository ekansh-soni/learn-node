const express = require("express")
const router = express.Router();
const {handleGenerateNewShortUrl, handleGetAnalytics, handleRedirectUrls} = require("../controller/url_controller")

router.post("/", handleGenerateNewShortUrl)

router.get("/redirect/:shortId",handleRedirectUrls)

router.get("/analytics/:shortId",handleGetAnalytics)

module.exports = router;