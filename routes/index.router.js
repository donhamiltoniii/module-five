var express = require("express");
var router = express.Router();

// USED FOR CREATING A STUDENT
//
// const StudentDomain = require("../models/Student.domain");
// const donny = new StudentModel(new StudentDomain("Donny", "JS"));
// donny.save().then(savedStudent => {
//   console.log(savedStudent);
// });

// DON'T NEED ANYMORE AFTER REDIRECTING
//
// const StudentModel = require("../models/Student.model");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/students");
});

module.exports = router;
