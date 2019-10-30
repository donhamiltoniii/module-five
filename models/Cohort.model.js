const mongoose = require("mongoose");

const Cohort = mongoose.model("Cohort", {
  students: [{ ref: "Student", type: mongoose.Schema.Types.ObjectId }],
  title: { required: true, type: String }
});

module.exports = Cohort;
