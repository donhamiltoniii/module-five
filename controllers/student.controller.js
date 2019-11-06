const CohortService = require("../services/cohort.service");
const StudentService = require("../services/student.service");

module.exports = {
  addNewStudent(req, res) {
    const { cohortId, imageUrl, language, name } = req.body;

    StudentService.add(cohortId, imageUrl, language, name, response => {
      res.json({ response });
    });
  },
  deleteSingleStudent(req, res) {
    const { id } = req.params;
    StudentService.deleteById(id, student => {
      res.json({ message: "student deleted", student });
    });
  },
  getAllStudents(req, res) {
    StudentService.findAll(students => {
      CohortService.findAll(cohorts => {
        res.json({ cohorts, students });
      });
    });
  },
  getStudentById(req, res) {
    const { id } = req.params;
    StudentService.findById(id, student => {
      res.json({ student });
    });
  },
  updateStudentLanguage(req, res) {
    const { id } = req.params;
    const { language } = req.body;
    StudentService.updateStudentLanguage(id, language, student => {
      res.json({ student });
    });
  }
};
