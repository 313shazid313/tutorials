import express from "express";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
import route from "./routes/todo.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("todo application");
  } catch (error) {
    console.log(error);
  }
});

app.use("/", route);

mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    app.listen(8000, () => {
      console.log("ok!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
