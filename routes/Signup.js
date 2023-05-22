
const express = require('express')
const router = express.Router()
const Classes = require('../models/Classes');
const { body, validationResult } = require('express-validator');
const Signup = require('../models/Signup');
router.use(express.json());


router.post('/Signup',[
body("Admin_name").exists(),
body("Phone").exists(),
body("Admin_post").exists(),

body("Password").exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


        try {
          let success = false;
            creatingacc = await Signup.create({
                Admin_name: req.body.Admin_name,
                Admin_post: req.body.Admin_post,
                Phone: req.body.Phone,
                Password:req.body.Password                
            });
            success = true
            res.json({success});
        } catch (error) {
            console.log(error.message);
            res.status(500).send("some error occured")

        }
    })


      router.put('/Login',[
      body("Admin_name").exists(),   
      body("Password").exists()],async (req, res) => {
  
        try {
          let success = false;
              let Admin = await Signup.find({Admin_name: req.body.Admin_name,Password:req.body.Password});
            if(!Admin){
              let data = {
                token:"encryption",
                success:success
              }
              return res.json(data);
            }
            success = true;
            let data = {
              token:Admin[0].Password +"encryption",
              success:success
            }
              res.json(data);
          } catch (error) {
            console.log(error.message);
            let success = false;
            res.status(500).send({"success":success})     
          }
      });



      // changing the password
      router.put('/Passwordchange',[
        body("Admin_name").exists(),   
        body("Password").exists(),
        body("NewPassword").exists(),
      ],async (req, res) => {
    
          try {
            let success = false;
                let Admin = await Signup.find({Admin_name: req.body.Admin_name,Password:req.body.Password});
              if(!Admin){
                let data = {
                  token:"login",
                  success:success
                }
                
                return res.json(data);
              }
              success = true;
              newpassword={
                Admin_name:req.body.Admin_name,
                Password:req.body.NewPassword
              }
              Admin = await Signup.findByIdAndUpdate(Admin[0]._id,{$set:newpassword},{new:true})
                res.json({success});
            } catch (error) {
              console.log(error.message);
              let success = false;
              res.status(500).send({"success":success})     
            }
        });
    
module.exports = router 