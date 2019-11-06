const CohortService = require("../services/cohort.service");

module.exports = {
  addNewCohort(req, res) {
    const { title } = req.body;

    CohortService.add(title, response => {
      res.json({ response });
    });
  },
  deleteCohortAndStudents(req, res) {
    const { id } = req.params;
    CohortService.removeCohortAndStudents(id, cohort => {
      res.json({ cohort, message: "Cohort and related students deleted" });
    });
  },
  getAllCohorts(req, res) {
    CohortService.findAll(cohorts => {
      res.json({ cohorts });
    });
  },
  getCohort(req, res) {
    const { id } = req.params;
    CohortService.findById(id, cohort => {
      res.json({ cohort });
    });
  },
  updateCohortTitle(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    CohortService.updateTitle(id, title, cohort => {
      res.json({ cohort });
    });
  }
};
