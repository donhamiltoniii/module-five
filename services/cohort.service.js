const CohortDomain = require("../models/Cohort.domain");
const CohortModel = require("../models/Cohort.model");

module.exports = {
  add(title, callback) {
    const newCohort = new CohortModel(new CohortDomain(title));
    newCohort.save().then(callback);
  },
  findAll(callback) {
    CohortModel.find().then(callback);
  }
};
