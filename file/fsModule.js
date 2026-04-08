const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(data);
// });

const data = fs.readFileSync("file.txt", "utf8");
console.log(data);

fs.writeFile("ok.txt", "i am ok", (err) => {
  console.log(err);
});

fs.writeFile("ok.txt", "i am not ok", (err) => {
  console.log(err);
});

fs.appendFile("ok.txt", "\nwho are you", (err) => {
  console.log(err);
});

fs.rename("ok.txt", "not-ok.txt", (err) => {
  console.log(err);
});
