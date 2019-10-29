var express = require("express");
var router = express.Router();

// USED FOR CREATING A STUDENT
//
// const StudentDomain = require("../models/Student.domain");
// const donny = new StudentModel(new StudentDomain("Donny", "JS"));
// donny.save().then(savedStudent => {
//   console.log(savedStudent);
// });

const StudentController = require("../controllers/student.controller");

/* GET All Students. */
router.get("/", StudentController.getAllStudents);

// POST New Student
router.post("/", StudentController.addNewStudent);

module.exports = router;
