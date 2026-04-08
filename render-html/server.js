import express from "express";
import path from "path";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  const filePath = path.resolve("index.html");

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
