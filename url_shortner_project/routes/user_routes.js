const express = require("express")
const {handleUserSignup, handleUserLogin} = require("../controller/user_controller")
const router = express.Router();

router.post("/",handleUserSignup)
router.post("/login",handleUserLogin)


module.exports = router;