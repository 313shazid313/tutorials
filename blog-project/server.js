import express from "express";
import bodyParser from "body-parser";
const app = express();

//! middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const blog = [
  {
    id: 1,
    title: "asd",
    body: "sda asdads as d",
  },
  {
    id: 2,
    title: "asd",
    body: "sda asdads as d",
  },
  {
    id: 3,
    title: "asd",
    body: "sda asdads as d",
  },
  {
    id: 4,
    title: "asd",
    body: "sda asdads as d",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "this is home" });
});

app.get("/blogs", (req, res) => {
  res.render("blogs", { blog });
});

app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;

  const singlePost = blog.find((p) => p.id === parseInt(id));

  res.render("blogDetails", { singlePost });
});

app.get("/add-blog", (req, res) => {
  res.render("addBlog");
});

app.post("/add-blog", (req, res) => {
  const { title, body } = req.body;

  blog.push({ id: blog.length + 1, title, body });

  res.redirect("/blogs");
});

app.delete("/delete-blog/:id", (req, res) => {
  const { id } = req.params;
  const targetBlog = blog.find((x) => x.id === parseInt(id));

  res.redirect("/blogs");
});

app.use((req, res) => {
  res.status(404).render("error", { title: "404 page not found" });
});

app.listen(8000, () => {
  console.log("server is running ok!");
});
