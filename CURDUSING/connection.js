const mongoose = require("mongoose");
const videoSchema = require("./models/usermodel");

mongoose.connect("mongodb://localhost:27017/Video").then(() => {
  console.log("mongodb connnected");
});

let Video = mongoose.model("Video", videoSchema);
module.exports = Video;
