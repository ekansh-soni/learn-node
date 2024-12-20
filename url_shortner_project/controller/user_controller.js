const User = require("../model/user_model.js")
const {v4 : uuidv4} = require("uuid")
const {getUser, setUser} = require("../service/auth.js")


async function handleUserSignup(req,res) {
    const {name, email, password} = req.body
    await User.create({
        name, email, password
    });
    return res.render("home");
}


async function handleUserLogin(req,res) {
    const {email, password} = req.body
    const user = await User.findOne({
         email, password
    });

    if(!user){
        return res.render("login", {
            error: "Invalid user name or password"
        })
    }

    const sessionId = uuidv4();

    // setUser(sessionId, user)
    const token = setUser(user)
    // res.cookie("uid", sessionId)
    res.cookie("uid", token)
    return res.redirect("/");
}



module.exports = {
    handleUserSignup,
    handleUserLogin
}