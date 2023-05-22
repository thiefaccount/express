const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const { body, validationResult } = require('express-validator');

router.use(express.json());

router.post('/studentResult', [body("student_name").exists(),
body("year").exists(),
body("Phone").exists(),
body("quarter").exists(),
body("subject1").exists(),
body("subject2").exists(),
body("subject3").exists(),
body("subject4").exists(),
body("subject5").exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        studentresult = await Result.create({
            student_name: req.body.student_name,
            year: req.body.year,
            Phone: req.body.Phone,
            grade: req.body.grade,
            quarter:req.body.quarter,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            subject4: req.body.subject4,
            subject5: req.body.subject5,

        });
        res.json("success")
    } catch (error) {
        console.log(error.message);
        res.json({"error":"error occcured"})

    }
});

router.put('/particularStudent', [body("student_name").exists(),
body("grade").exists(),
body("Phone").exists(),
body("quarter").exists(),], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let StudentResult = await Result.find({ student_name: req.body.student_name,grade:req.body.grade,Phone:req.body.Phone,quarter:req.body.quarter });
        if (StudentResult.length === 0) {
            return res.send(false)
        }
        res.send(StudentResult);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
});
router.get('/allStudent', async (req, res) => {
    
    try {
        let StudentResult = await Result.find();
        if (!StudentResult) {
            return res.status(400).send("no student exist")
        }
        res.send(StudentResult);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
});

// the endpoint for all student with quarter and year

router.put('/YearQuarterStudent', [
body("year").exists(),
body("quarter").exists(),
body("grade").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let StudentResult = await Result.find({ year:req.body.year,quarter:req.body.quarter,grade:req.body.grade });
        if (StudentResult.length<1) {
            return res.json(false);
        }
        res.send(StudentResult);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
});

module.exports = router 
