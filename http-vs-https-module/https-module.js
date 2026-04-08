//! http server
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Hello world!");
//   })
//   .listen(3000, () => {
//     console.log("listening at 3000");
//   });

//! https server
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const httpsServer = https.createServer(options, (req, res) => {
  res.writeHead("200", { "content-type": "text/html" });
  res.end("<h1>this is secure server</h1>")
});

httpsServer.listen(4000, () => {
  console.log("this is server");
});
