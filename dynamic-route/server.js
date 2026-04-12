import express from "express";

const app = express();

app.set("view engine", "ejs");

const users = [
  { name: "shazid", id: 1, role: "Admin" },
  { name: "shafin", id: 2, role: "Editor" },
  { name: "asd", id: 3, role: "user" },
];

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const user = users.find((x) => x.id === parseInt(id));

  if (user) {
    res.render("user", { user });
  } else {
    console.log(user);
    res.render("user", { user });
  }
  // res.json(target);
});

app.listen(8000, () => {
  console.log("running at port 8000");
});
