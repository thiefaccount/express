
const express = require('express')
const router = express.Router()
const Classes = require('../models/Classes');





router.get('/example',async (req, res) => {
  
    try {
        let student = await Classes.find();
      if(!student){
        return res.status(400).send("no student exist")
      }
        res.send(student);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured")     
    }
  });
  
module.exports = router 