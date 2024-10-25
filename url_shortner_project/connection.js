const mongoose = require("mongoose")
async function connectMongoDB(url) {
    return mongoose.connect(url)
    .then(()=>console.log("Mongoose connected"))
    .catch((e)=> console.log(`Mongoose Conneection Failed ${e}`))
}


module.exports ={
    connectMongoDB
}