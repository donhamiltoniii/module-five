const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  language: { required: true, type: String },
  name: { required: true, type: String }
});

module.exports = Student;
