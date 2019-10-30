const CohortModel = require("../models/Cohort.model");
const StudentDomain = require("../models/Student.domain");
const StudentModel = require("../models/Student.model");

module.exports = {
  add(cohortId, language, name, callback) {
    const newStudent = new StudentModel(new StudentDomain(language, name));
    CohortModel.findById(cohortId).then(cohort => {
      cohort.students.push(newStudent);
      cohort.save().then(cohort => {
        console.log(cohort);
      });
    });
    newStudent.save().then(callback);
  },
  findAll(callback) {
    StudentModel.find().then(callback);
  }
};
