const http = require("http");

const userData = [
  { id: 1, name: "shazid", age: 23 },
  { id: 2, name: "shakib", age: 127 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(userData));
    res.end();
  } else {
    res.write(JSON.stringify("Error page"));
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Everything ok!");
});
