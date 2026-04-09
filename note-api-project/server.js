import express from "express";
// import notes from './notes.json' with { type: 'json' };

const app = express();
let notes = [];

app.use(express.json());

app.get("/notes", (req, res) => {
  res.json({
    success: true,
    data: notes,
  });
});

app.get("/single-notes/:id", (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const data = notes.find((user) => {
    return user.id === parseInt(id);
  });

  console.log(data);

  if (data) {
    res.json({
      success: true,
      data: data,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

app.post("/new-notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: notes.length + 1,
    title: title,
    content: content,
  };

  console.log(newNote);
  notes.push(newNote);

  res.status(201).json({ message: "success" });
});

app.listen(8000, () => {
  console.log("server running at port 8000");
});
