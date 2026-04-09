import express from "express";

const app = express();

app.use(express.json());

app.post("/api/user", (req, res) => {
  console.log("JSON body : ", req.body);
  res.json({ message: "data :", data: req.body });
});

app.get("/", (req, res) => {});

app.listen(8000, () => {
  console.log("all ok");
});
