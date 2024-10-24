const User = require("../models/user")

async function handleGetAllUsers(req, res){
    const dbUsers = await User.find({});
    return res.json(dbUsers)
}


async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id)
    if(!user) return res.status(400).json({error :"User Not Found"})
    return res.json(user)
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
}