require('dotenv').config()
const connectToMongo = require("./db");
const express = require('express');
var cors = require('cors');
connectToMongo();

const app = express()
app.use(cors())
const port = 3001

app.use('/api/Students', require("./routes/Students"));
app.use('/api/Studentpayment', require("./routes/Studentpaymentroute"));
app.use('/api/Admin',require("./routes/Signup"));
app.use('/api/examp',require('./routes/Example'));
app.use('/api/result',require('./routes/Results'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

