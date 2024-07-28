const mongoose = require("mongoose");

const userschems = new mongoose.Schema({
  username: {
    type: String,
  },
  fileupload: {
    type: String,
    default: "./defaultimg.jpg",
  },
});

module.exports = userschems;
