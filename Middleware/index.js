const express = require("express");
const app = express();
const fs = require("fs");

const user = require("../Project01/client.json");
app.use(express.json());
app.use((req, res, next) => {
  //db req
  //phone
  req.phone = "899844";

  next();
});

app.get("/", (req, res) => {
  res.setHeader("customheader", "pooja");
  res.status(202).json("okk");
});
app.post("/api/users", (req, res) => {
  const data = req.body;
  if (!data.occupation) {
    return res.status(404).send("occupation deatils is require");
  }
  user.push({ ...data, id: user.length + 1 });

  fs.writeFile("./client.json", JSON.stringify(user), (err) => {});
  res.end("user added who's number is " + req.phone);
});

app.listen(8000, () => {
  console.log(`server is started`);
});
