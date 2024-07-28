const mongoose = require("mongoose");
const makeupSchema = require("./models/MekupSchema");

mongoose.connect("mongodb://localhost:27017/Mekup").then(() => {
  console.log("mongodb is connected");
});

const Mekup = mongoose.model("mekup", makeupSchema);
module.exports = Mekup;
