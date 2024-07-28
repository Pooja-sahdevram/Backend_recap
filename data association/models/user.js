const mongoose = require("mongoose");
const Prodcuts = require("./product");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  post: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Prodcuts",
    },
  ],
});

module.exports = userschema;
