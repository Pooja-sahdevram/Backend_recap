const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  productname: {
    type: String,
    require: true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

 
});

module.exports = productschema;
