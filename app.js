var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// Handles DB Connection
require("./utils/db");

var indexRouter = require("./routes/index.router");
const cohortRouter = require("./routes/cohort.router");
const studentRouter = require("./routes/student.router");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/cohorts", cohortRouter);
app.use("/students", studentRouter);

module.exports = app;
