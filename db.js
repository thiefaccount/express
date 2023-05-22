require('dotenv').config()
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://lmanish931:manishyuiop9898@cluster0.isawuip.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI,()=>{
        console.log("connected to haha mongo successfully");
        console.log("it is the variable" + process.env.mongo_url);
    })
}
module.exports = connectToMongo;
