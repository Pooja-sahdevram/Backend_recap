const mongoose = require("mongoose");

const makeupSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
module.exports = makeupSchema;
