import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const url = "mongodb://localhost:27017";
const dbName = "testdb";

const client = new MongoClient(url);

let db;
const connectdb = async () => {
  try {
    await client.connect();

    db = client.db(dbName);
    console.log("connected!");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", async (req, res) => {
  try {
    const data = await db.collection("students").find().toArray();

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add-student", async (req, res) => {
  try {
    const { name, sec } = req.body;
    await db.collection("students").insertOne({ name, sec });

    res
      .status(201)
      .send(`<h1>added successfully</h1> <a href ='/form.html'>go back</a>`);
  } catch (error) {
    console.log(error);
  }
});

app.put("/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    // await db.collection("students").

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid student id!" });
    }

    if (Object.keys(newData).length === 0) {
      return res.status(400).json({ error: "Request body cant be empty!" });
    }

    const result = await db
      .collection("students")
      .replaceOne({ _id: new ObjectId(id) }, newData);

    if (result.matchedCount === 1) {
      res.json({ message: "student updated successfully!" });
    } else {
      res.status(404).json({ message: "student not found!" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete-student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(404).json({ message: "student not found!" });
    } else {
      await db.collection("students").deleteOne({
        _id: new ObjectId(id),
      });
      return res.status(200).json({ message: "deleated successfully!" });
    }
  } catch (error) {
    console.log(error);
  }
});

connectdb().then(() => {
  app.listen(8000, () => {
    console.log("ok");
  });
});
