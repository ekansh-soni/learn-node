// const sessionIdToUserMap = new Map()

const jwt = require("jsonwebtoken")

const secret = "EkanshSoni"

function setUser( user) {
    // sessionIdToUserMap.set(id, user)

    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret)
}

function getUser(token){
    // return sessionIdToUserMap.get(id)
    if(!token) return null
    console.log("token:", token); 
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}


module.exports = {
    setUser,
    getUser
}