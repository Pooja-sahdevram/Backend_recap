const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} AND THE METHOD IS ${
    req.method
  } new recieved\n`;

  if (req.url === "/favicon.ico") return res.end();
  else {
    fs.appendFile("test.text", log, (err) => {});
  }

  const xyz = url.parse(req.url, true);
  switch (xyz.pathname) {
    case "/":
      res.end("home page");
      break;
    case "/home":
      res.end("home page");
      break;
    case "/about":
      const username = xyz.query.username;
      res.end("hi " + username);
      break;
    case "/love":
      res.end("love page");
      break;
    case "/signup":
      if (req.method == "GET") {
        res.end("this is a signup form");
      } else if (req.method === "POST") {
        //DQ query
        res.end("SIgnup successfull baby");
        //redirect ther user to the page
      }

      break;
    default:
      res.end(`<h1>404</h1>`);
  }
});

console.log(url);

myserver.listen(8001, () => {
  console.log("server started");
});
