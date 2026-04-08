// built in module

const os = require("os");
console.log(os.platform());

console.log(os.freemem());

// local module
const add = require("./math.js").add;

console.log(add(12, 12));

const chalk = require("chalk").default;
console.log(chalk.red("all ok"));
