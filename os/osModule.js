const os = require("os");

console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.totalmem())
console.log(os.machine())
const a = os.type();
console.log(typeof(a)) // string
console.log(os.userInfo())