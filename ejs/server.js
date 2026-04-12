import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "home page", message: "welcome to home page!" });
});

app.listen(8000, () => {
  console.log("server is running at port 8000");
});
