import express from "express";

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ ok: "i am ok" });
});
