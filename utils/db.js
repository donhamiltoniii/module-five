const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://cbus_instructor:drowssap@cluster0-ljwdh.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({ make: String, model: String })
);

const modelThree = new Car({ make: "Tesla", model: "Model 3" });

modelThree.save((error, savedModelThree) => {
  if (error) return console.error(error);
  console.log(savedModelThree.make, savedModelThree.model);
});
