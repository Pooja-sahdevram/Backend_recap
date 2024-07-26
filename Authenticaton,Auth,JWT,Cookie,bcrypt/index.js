const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//cookie and bcrypt
app.use(cookieParser());
//jwt
var privateKey = "scret";
var token = jwt.sign({ foo: "bar" }, privateKey);
app.get("/setcoolieofjwt", (req, res) => {
  if (token) {
    res.cookie("token", token);
    res.send("setcookie");
  } else {
    console.log("error");
  }
});

app.get("/readjwt", (req, res) => {
  console.log(req.cookies);
  res.send("shown");
});

var hasha;
app.get("/setbcrypt", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("myPlaintextPassword", salt, function (err, hash) {
      hasha = hash;
    });
  });
  res.send("shown");
});

app.get("/checkpass", (req, res) => {
  bcrypt.compare("myPlaintextPassword", hasha, function (err, result) {
    if (result == true) {
      res.send("Authenticated");
    } else {
      res.end("bad req");
    }
  });
});

app.get("/", (req, res) => {
  res.cookie("rememberuser", "45sa4cc4ef5ccd5c5d4c4e54fwasf");
  res.end("ok");
});
app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("read page");
});

app.listen(5000, () => {
  console.log("server is started ");
});
