import express from "express";
import cors from "cors";
import mongoose from "mongoose";

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

app.listen(8000, ()=>{
    console.log("ok!")
})
