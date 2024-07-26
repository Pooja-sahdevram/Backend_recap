const fs = require("fs");

// // sync
// fs.writeFileSync("./text.txt", "hello");
// //async
// fs.writeFile("./text.txt", "sufyan", (err) => {
//   if (err) {
//     console.log("erro");
//   } else {
//     console.log("yeyyyy");
//   }
// });

// console.log(
//   fs.readFile("./text.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   })
// );

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

// fs.mkdirSync("my-baby");
fs.rmdirSync("my-baby");
