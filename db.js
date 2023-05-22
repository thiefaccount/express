require('dotenv').config()
const mongoose = require("mongoose");
const mongoURI = process.env.mongo_URL;

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI,()=>{
        console.log("connected to haha mongo successfully");
        console.log(process.env.mongo_url);
    })
}
module.exports = connectToMongo;
