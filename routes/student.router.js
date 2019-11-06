var express = require("express");
var router = express.Router();

const StudentController = require("../controllers/student.controller");

// POST New Student
router.post("/", StudentController.addNewStudent);

/* GET All Students. */
router.get("/", StudentController.getAllStudents);

/* GET Student By Id. */
router.get("/:id", StudentController.getStudentById);

// PATCH Update Student Language
router.patch("/:id", StudentController.updateStudentLanguage);

// DELETE Single Student
router.delete("/:id", StudentController.deleteSingleStudent);

module.exports = router;
