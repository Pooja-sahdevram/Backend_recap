const express = require("express");
const example = require("./text.json");

const app = express();
app.get("/", (req, res) => {
  res.send("home page");
});
app.listen("8000", () => {
  console.log("server is started ");
});
console.log(app);
