require('dotenv').config()
const express = require('express');
var cors = require('cors');

const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 3000

const uri = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);
app.use(cors());
app.get('/',(req,res)=>{
  res.send({title:'book'});
});
app.use('/api/Students', require("./routes/Students"));
app.use('/api/Studentpayment', require("./routes/Studentpaymentroute"));
app.use('/api/Admin',require("./routes/Signup"));
app.use('/api/examp',require('./routes/Example'));
app.use('/api/result',require('./routes/Results'));


client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});

