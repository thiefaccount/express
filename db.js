require('dotenv').config()
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_CONNECTION_STRING;

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI,()=>{
        console.log("connected to haha mongo successfully");
        console.log("it is the variable");
    })
}
module.exports = connectToMongo;
