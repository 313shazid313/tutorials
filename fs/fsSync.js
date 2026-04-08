//! why i should not use writeFileSync insted of writeFile
// 🧠 Why you should avoid writeFileSync in most cases
// 1. ❌ Blocks the Event Loop

// Node.js is single-threaded. If you use writeFileSync, everything pauses.

// Bad for:
// APIs
// Servers
// Real-time apps
// 2. ❌ Poor Scalability

// If many users hit your server:

// Each writeFileSync call blocks everything
// Requests pile up → slow or crashed server
// 3. ❌ Slower for Multiple Operations

// With async:

// Node can handle other tasks while writing files
// With sync:
// Everything waits one by one
// ✅ When writeFileSync is OK
// Small scripts / CLI tools
// Startup scripts
// Debugging
// One-time operations

const fs = require("fs");
fs.writeFileSync("data.txt", "who are you updateed", "utf8");

const data = fs.readFileSync("data.txt", "utf-8");

console.log(data);

fs.unlinkSync("data.txt");

fs.mkdirSync("myFolder");
fs.rmdirSync("myFolder", {recu});
