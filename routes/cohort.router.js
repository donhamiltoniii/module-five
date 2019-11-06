var express = require("express");
var router = express.Router();

const CohortController = require("../controllers/cohort.controller");

// POST New Cohort
router.post("/", CohortController.addNewCohort);

/* GET All Cohorts. */
router.get("/", CohortController.getAllCohorts);

/* GET All Cohorts. */
router.get("/:id", CohortController.getCohort);

// PATCH Update Cohort Title
router.patch("/:id", CohortController.updateCohortTitle);

// DELETE Single Cohort
router.delete("/:id", CohortController.deleteCohortAndStudents);

module.exports = router;
