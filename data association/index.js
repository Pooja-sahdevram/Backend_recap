const express = require("express");
const app = express();
const { User, Prodcuts } = require("./connection");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let body = req.body;

  User.create({
    username: body.username,
    email: body.email,
    age: body.age,
  });
  res.send("ok");
});

app.post("/postcreate", async (req, res) => {
  let body = req.body;
  let newid = await Prodcuts.create({
    productname: body.productname,
    user: body._id,
  });
  console.log();
  let user = await User.findById(body._id);
  console.log(newid._id);
  user.post.push(newid._id);
  await user.save();

  res.end("added");
});

app.listen(6578, () => {
  console.log("server is started");
});
