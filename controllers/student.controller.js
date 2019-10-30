const StudentService = require("../services/student.service");

module.exports = {
  addNewStudent(req, res) {
    const { cohortId, language, name } = req.body;

    StudentService.add(cohortId, language, name, response => {
      res.json({ response });
    });
  },
  getAllStudents(req, res) {
    StudentService.findAll(students => {
      res.json(students);
    });
  }
};
