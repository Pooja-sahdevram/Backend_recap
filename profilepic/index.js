const express = require("express");
const app = express();
const path = require("path");
const CookieParser = require("cookie-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const crypto = require("crypto");
const User = require("./connection");
var fx;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, buffer) {
      if (err) {
        return cb(err);
      }
      // Generate a random filename using the buffer and file extension
      const fn = buffer.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const upload = multer({ storage: storage });

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", "");
});

app.post("/", async (req, res) => {
  let body = req.body;

  await User.create({
    username: body.username,
    fileupload: fx.filename,
  });
  res.end("ok");
  console.log();
});

app.get("/file", (req, res) => {
  res.render("profileimg");
});

app.post("/file", upload.single("avtar"), async function (req, res, next) {
  if (req.file) {
    console.log(req.file);
    fx = req.file;

    res.render("home", fx);
  } else {
    res.status(400).send("No file uploaded.");
  }
});
app.listen(8010, () => {
  console.log("server is started");
});
