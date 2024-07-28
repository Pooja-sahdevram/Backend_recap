const express = require("express");
const app = express();
const cookeParser = require("cookie-parser"); // Typo here, should be 'cookie-parser'
var jwt = require("jsonwebtoken");
const Mekup = require("./connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

//form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cookieparser
app.use(cookeParser());

//ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});


app.get("/home", (req, res) => {
  let token = req.cookies.token;
  res.cookie("token", token);

  const decode = jwt.decode(token, process.env.SCRET);
  res.render("home", decode);
});


app.post("/logout", (req, res) => {
  token = req.cookies.token;
  res.cookie("token", "");
  res.render("index");
});
app.post("/", (req, res) => {
  let password = req.body.password;
  let email = req.body.email;

  bcrypt.genSalt(saltRounds, async function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      await Mekup.create({
        email: email,
        password: hash,
      });
    });
  });

  var token = jwt.sign({ email: email, password: password }, process.env.SCRET);
  res.cookie("token", token);
  res.redirect(`/home`);
  console.log(token);
});

app.listen(3005, () => {
  console.log("sersver is started");
});
