import express from "express";

const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("<h1>welcome home!</h1>");
});

app.get("/login", (req, res) => {
  res.send(`<form action="/submit" method="POST">
                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password'/>
                <button>Login</button>
            </form>`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>this is submit page!</h1>`);
});

app.listen(PORT, (req, res) => {
  console.log(`listening at port ${PORT}`);
});
