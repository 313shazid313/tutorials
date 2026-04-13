import express from "express";
import fetch from "node-fetch";

const app = express();

app.set("view engine", "ejs");

app.get("/posts", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    
    res.render("posts", { posts });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("server is running ok!");
});
