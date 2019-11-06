const CohortDomain = require("../models/Cohort.domain");
const CohortModel = require("../models/Cohort.model");
const StudentModel = require("../models/Student.model");

module.exports = {
  add(title, callback) {
    const newCohort = new CohortModel(new CohortDomain(title));
    newCohort.save().then(callback);
  },
  findAll(callback) {
    CohortModel.find().then(callback);
  },
  findById(id, callback) {
    CohortModel.findById(id).then(callback);
  },
  removeCohortAndStudents(id, callback) {
    CohortModel.findById(id).then(cohort => {
      StudentModel.remove(
        {
          _id: { $in: cohort.students }
        },
        () => {
          callback(cohort.remove());
        }
      );
    });
  },
  updateTitle(id, title, callback) {
    CohortModel.findByIdAndUpdate({ _id: id }, { title }, { new: true }).then(
      callback
    );
  }
};
