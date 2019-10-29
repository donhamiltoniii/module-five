const StudentService = require("../services/student.service");

module.exports = {
  addNewStudent(req, res) {
    const { language, name } = req.body;

    StudentService.add(language, name, response => {
      res.json({ response });
    });
  },
  getAllStudents(req, res) {
    StudentService.findAll(students => {
      res.json(students);
    });
  }
};
