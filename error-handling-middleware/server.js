import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/err", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.statusSode = 400;
  next(error);
});

app.use((err, req, res, next) => {
  console.error("caught error by middleware", err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(8000, () => {
  console.log("all ok");
});
