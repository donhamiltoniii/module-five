var express = require("express");
var router = express.Router();

const CohortController = require("../controllers/cohort.controller");

/* GET All Students. */
router.get("/", CohortController.getAllCohorts);

// POST New Student
router.post("/", CohortController.addNewCohort);

module.exports = router;
