const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = videoSchema;
