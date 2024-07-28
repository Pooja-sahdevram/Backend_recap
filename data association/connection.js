const mongoose = require("mongoose");
const userschema = require("./models/user");
const productschema = require("./models/product");

let Ecomm = mongoose.connect("mongodb://localhost:27017/E-comm").then(() => {
  console.log("mongodb connected");
});

const User = mongoose.model("User", userschema);
const Prodcuts = mongoose.model("Prodcuts", productschema);

module.exports = { User, Prodcuts };
