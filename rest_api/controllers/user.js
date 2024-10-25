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

async function handleUpdateUserById(req,res) {
    console.log("Update Year");
    return res.json({statusbar : "Update Year"})    
}

async function handleCreateUser(req, res) {
    const body = req.body;

    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.ipAddress 
    ){
        return res.status(400).json({statusbar : "All Fields are required"})
    }
    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        ipAddress : body.ipAddress,
    })

    return res.status(200).json({statusbar: "Success",})
}

async function handleDeleteUser(req, res) {
    console.log("Delete User");
    return res.json({statusbar : "Delete User"})
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleCreateUser,
    handleDeleteUser
}