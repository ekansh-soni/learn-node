const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String,},
    email:{type: String },
    gender:{type: String},
    ipAddress:{type: String },
},{timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = User;