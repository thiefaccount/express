
const express = require('express')
const router = express.Router()
const Classes = require('../models/Classes');
const { body, validationResult } = require('express-validator');
const Studentpayment = require('../models/Studentpayment');
router.use(express.json());


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

    router.get('/fetch',async (req, res) => {
  
        try {
          console.log("till here");    
          let student = await Studentpayment.find();
              
            if(!student){
              return res.status(400).send("no student exist")
            }
              res.send(student);
          } catch (error) {
            console.log(error.message);
            res.status(500).send("some error occured")     
          }
      });

      router.put('/studentfetch',async (req, res) => {
  
        try {
              let Student = await Studentpayment.find({student_name: req.body.student_name,grade:req.body.grade});
            if(!Student){
              return res.status(400).send("no notes exist")
            }
              res.send(Student);
          } catch (error) {
            console.log(error.message);
            res.status(500).send("some error occured")     
          }
      });
      router.put('/paymentfetch',async(req,res) =>{
        try {
          let Student = await Studentpayment.find({student_name: req.body.student_name,Phone: req.body.Phone,grade:req.body.grade});
            if(Student.length==0){
              return res.send(false)
            }
              res.send(Student);
          
        } catch (error) {
          console.log(error.message);
          res.status(500).send("some error occured");
        }
      });
    
module.exports = router 