const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/plain" });
      return res.end("404 not found!");
    } else if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
    } else if (req.url === "/submit") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>form submitted</h1>");
    }
    res.end();
  });
});

server.listen(4000, () => {
  console.log(`server is running at ${4000}`);
});
