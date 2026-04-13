import mongoose from "mongoose";
import express from "express";
const port = 3000;
const app = express();
    
mongoose
  .connect("mongodb://localhost:27017/dummydb")
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`server running at port ${port}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
