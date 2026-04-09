import express from "express";
import path from "path";


const filePath = path.resolve();

const app = express();

app.get("/", (req, res) => {
  res.sendFile(filePath + "/home.html");
});

app.get("/about", (req, res)=>{
    res.send(`<h1>This is about page</h1>`)
})

app.use((req, res)=>{
    res.status(404).sendFile( filePath + "/404.html");
})

app.listen(8000, ()=>{
    console.log("listening at port 8000")
})