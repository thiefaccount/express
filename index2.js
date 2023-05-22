const express = require('express');

var cors = require('cors');
const mongoose = require("mongoose");
const Studentpayment = require('../models/Studentpayment');
const mongodb = "mongodb://127.0.0.1:27017";

mongoose.connect(mongodb,(err)=>{
    if(err) console.log(`unable to connect : ${err}`);
    else
        console.log("mpngodb is connected");
})
const app = express()
app.use(cors())
const port = 3001


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

router.post('/create',[body("student_name").exists(),
body("year").exists(),
body("Phone").exists(),
body("grade").exists(),

body("Total_payment_done","enater a number for payment").isNumeric()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let success = false;
        try {
            student = await Studentpayment.create({
                student_name: req.body.student_name,
                year: req.body.year,
                Phone: req.body.Phone,
                grade:req.body.grade,
                Total_payment_done: req.body.Total_payment_done
                
            });
            success = true;
            res.json({success})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({success})

        }
    })
