import express from "express";

const app = express();

const PORT = 8000;

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleDateString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/admin", (req, res, next) => {
  console.log("admin section accessed");
  next();
});

app.get("/", (req, res) => {
  res.send("this is home!");
});

app.get("/about", (req, res) => {
  res.send("this is about page!");
});

app.get("/admin/dashboard", (req, res) => {
  res.send("this is the dashboard");
});

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
