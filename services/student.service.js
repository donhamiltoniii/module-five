const StudentDomain = require("../models/Student.domain");
const StudentModel = require("../models/Student.model");

module.exports = {
  add(language, name, callback) {
    const newStudent = new StudentModel(new StudentDomain(language, name));
    newStudent.save().then(callback);
  },
  findAll(callback) {
    StudentModel.find().then(callback);
  }
};
