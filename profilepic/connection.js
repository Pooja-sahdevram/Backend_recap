const mongoose = require("mongoose");
const userschems = require("./models/user");

mongoose.connect("mongodb://localhost:27017/profile").then(() => {
  console.log("DataBase is connected");
});

const User = mongoose.model("User", userschems);
module.exports = User;
