const CohortService = require("../services/cohort.service");

module.exports = {
  addNewCohort(req, res) {
    const { title } = req.body;

    CohortService.add(title, response => {
      res.json({ response });
    });
  },
  getAllCohorts(req, res) {
    CohortService.findAll(cohorts => {
      res.json({ cohorts });
    });
  }
};
