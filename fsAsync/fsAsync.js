const fs = require("fs");

fs.writeFile("test.txt", "i am ok", "utf8", (err) => {
  if (err) {
    console.log("this is an error");
  }
});

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

fs.appendFile("test.txt", "\nwhat is your name?", (err) => {
  // ! no data in parameter because we are not reading any data we are just appending data
  console.log("data appended");
});

fs.unlink("test.txt", (err) => {
  if (err) {
    console.log("Cant delete the non-existing file" , err);
  }
});

// ✅ fs.writeFileSync (synchronous)
// Runs blocking
// The code waits until the file is written before moving to the next line
// No callback
// const fs = require("fs");

// fs.writeFileSync("test.txt", "Hello World");
// console.log("Done writing"); // runs AFTER file is written

// 👉 Use when you want simple, predictable execution (but it can block your app).

// ✅ fs.writeFile (asynchronous)
// Runs non-blocking
// The code continues immediately while the file is being written in the background
// Uses a callback
// const fs = require("fs");

// fs.writeFile("test.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("Done writing"); // runs after file is written
// });

// console.log("This runs first");

// 👉 Use this in real apps to keep performance smooth.