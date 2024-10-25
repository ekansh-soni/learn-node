
const mongoose = require("mongoose")


async function connectMongoDb(url){
    return mongoose.connect(url).then(()=>console.log("Connection Success to mongooese")
    ).catch((e)=>console.log(`Error in Connection ${e}`));
}

module.exports ={
    connectMongoDb
};