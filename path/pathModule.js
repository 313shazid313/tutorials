const path = require("path");
console.log(__dirname);
console.log(__filename);

const filePath = "/home/shazid313/myfiles/office/tutorials/path/pathModule.js";

console.log(path.basename(filePath));

console.log(path.basename(filePath, ".js"));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

// making path
console.log(path.join("shazid" , "shafin", "index.js", "server.js", "app.js"));

