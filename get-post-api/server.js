import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Us</h1>
    <p>We are a company that provides excellent services.</p>`);
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  res.send(`You searched for: ${name}`);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.send(`Received submission: Name - ${name}, Email - ${email}`);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
