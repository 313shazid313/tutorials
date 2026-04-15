import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("user", "shazid hossain", {
    maxAge: 1000 * 60 * 2,
    httpOnly: true,
    sameSite: "strict",
  });

  res.send("cookie has been set");
});

app.get("/get-cookie", (req, res) => {
  const username = req.cookies.user;

  res.send(`Username from cookies : ${username}`);
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("user");

  res.send("cookie cleared successfully!");
});

app.listen(8000, (req, res) => {
  console.log("server is running ok!");
});
