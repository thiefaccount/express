
const express = require('express')
const router = express.Router()
const Classes = require('../models/Classes');
const { body, validationResult } = require('express-validator');

router.use(express.json());


router.post('/create', [body("student_name").exists(),
body("Address").exists(),
body("Phone").exists(),
body("Total_payment", "enater a number for payment").isNumeric()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    Student = await Classes.create({
      student_name: req.body.student_name,
      Address: req.body.Address,
      Phone: req.body.Phone,
      grade: req.body.grade,
      Total_payment: req.body.Total_payment

     
    });
    if (Student) {
      res.json("success");
    } else {
      res.json(false);
    }
    // res.json("success")
  } catch (error) {
    console.log(error.message);
    // res.status(500).send("some error occured")
    if (error.code === 11000) {
      // handle duplicate key error
      res.status(400).send("Student with this name and number already exists");
    }
    else {
      res.status(500).send("some error occured")
    }

  }
})

router.get('/fetchstudent', async (req, res) => {

  try {
    let student = await Classes.find();
    if (!student) {
      return res.status(400).send("no student exist")
    }
    res.send(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured")
  }
});

router.put('/studentfetch', async (req, res) => {

  try {
    let StudentUII = await Classes.find({ student_name: req.body.student_name });
    if (!StudentUII) {
      return res.status(400).send("no notes exist")
    }
    res.send(StudentUII);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured")
  }
});


// changing the password
router.get('/increaseClass', async (req, res) => {

  try {
    let success = false;
    let ChangeClass = await Classes.find();
    if (!ChangeClass) {
      let data = {
        token: "login",
        success: success
      }

      return res.json(data);
    }
    success = true;
    ChangeClass = await Classes.updateMany({}, { $inc: { grade: 1 } }, { multi: true });
    res.json({ success });
  } catch (error) {
    console.log(error.message);
    let success = false;
    res.status(500).send({ "success": success })
  }
});

router.get('/decreaseClass', async (req, res) => {

  try {
    let success = false;
    let ChangeClass = await Classes.find();
    if (!ChangeClass) {
      let data = {
        token: "login",
        success: success
      }

      return res.json(data);
    }
    success = true;
    ChangeClass = await Classes.updateMany({}, { $inc: { grade: -1 } }, { multi: true });
    res.json({ success });
  } catch (error) {
    console.log(error.message);
    let success = false;
    res.status(500).send({ "success": success })
  }
});

// deleting the student
router.delete('/deletestudent', async (req, res) => {

  try {
    let StudentUII = await Classes.findOneAndDelete({ student_name: req.body.student_name, grade: req.body.grade });
    if (!StudentUII) {
      return res.status(400).send("no student exist")
    }
    res.send("deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured")
  }
});

// Update the payment

router.put('/updatePayment', async (req, res) => {

  try {
    let success = true;
    let studentpayment = await Classes.updateMany({ grade: req.body.grade }, { $set: { Total_payment: req.body.Total_payment } });
    if (!studentpayment) {
      success = false;
      return res.status(400).json({success});
    }
    res.send(success);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured")
  }
});


module.exports = router 