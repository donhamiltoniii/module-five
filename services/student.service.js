const CohortModel = require("../models/Cohort.model");
const StudentDomain = require("../models/Student.domain");
const StudentModel = require("../models/Student.model");

module.exports = {
  add(cohortId, imageUrl, language, name, callback) {
    const newStudent = new StudentModel(
      new StudentDomain(imageUrl, language, name)
    );
    newStudent
      .save()
      .then(student => {
        CohortModel.findById(cohortId).then(cohort => {
          cohort.students.push(newStudent);
          cohort.save().then(cohort => {
            console.log(cohort);
          });
        });
        return student;
      })
      .then(callback);
  },
  deleteById(id, callback) {
    StudentModel.findOneAndDelete(id).then(callback);
  },
  findAll(callback) {
    StudentModel.find().then(callback);
  },
  findById(id, callback) {
    StudentModel.findById(id).then(callback);
  },
  updateStudentLanguage(id, language, callback) {
    StudentModel.findByIdAndUpdate(
      { _id: id },
      { language },
      { new: true }
    ).then(callback);
  }
};
