const express = require("express");
const Video = require("./connection");
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));

//route

app.get("/read", async (req, res) => {
  let video = await Video.find({});
  res.send(video);
});

app.post("/", async (req, res) => {
  let data = req.body;
  if (data) {
    await Video.create({
      name: data.name,
      title: data.title,
      type: data.type,
    });
    res.send("user is created");
  }
});

app.delete("/delete", async (req, res) => {
  await Video.findByIdAndDelete(req.body._id);
  res.send("deleted");
});

app.post("/update", async (req, res) => {
  let id = req.body._id;
  let title = req.body.title;
  await Video.findByIdAndUpdate(id, { title: title });
  res.send("okkmjn");
});

app.listen(5487, () => {
  console.log("server started");
});
