const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("all ok");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is about page!");
    res.end();
  } else {
    res.write("this is 404 page!");
    res.end();
  }
});

server.listen(8000, () => console.log("server is running"));
