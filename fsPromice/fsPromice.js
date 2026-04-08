const fs = require("fs").promises;

// const fs = require("fs/promises") //!another way

fs.writeFile("test.txt", "this is a text file", "utf-8")
  .then(console.log("Data Saved!"))
  .catch((err) => {
    console.log(err);
  })
  .finally(console.log("this is final"));

fs.appendFile("test.txt", "\nthis is new, ", "utf8")
  .then(console.log("Data Saved!"))
  .catch((err) => {
    console.log(err);
  })
  .finally(console.log("this is final"));
