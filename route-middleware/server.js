import express from "express";

const app = express();

const customMiddlewareQuery = (req, res, next) => {
  const { age } = req.query;

  if (age >= 18) {
    console.log("login success!");
  }else{
    console.log("permission denyed")
  }
  next()
};

app.get("/", (req, res) => {
  res.send("this is home!");
});

app.get("/about", (req, res) => {
  res.send("this is about!");
});

app.get("/login", customMiddlewareQuery, (req, res) => {
  res.send("this is login!");
});

app.get("/users", (req, res) => {
  res.send("this is users!");
});

app.get("/products", (req, res) => {
  res.send("this is product page!");
});

app.listen(8000, () => {
  console.log("listening at port 8000");
});
