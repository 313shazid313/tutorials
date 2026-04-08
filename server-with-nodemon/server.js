const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("this is a page");
    res.end();
  })
  

server.listen(3000,()=> console.log("all ok"))
