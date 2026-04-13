import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const url = "mongodb://localhost:27017";
const dbName = "testdb";

const client = new MongoClient(url);

app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    await client.connect();

    const db = client.db(dbName);
    console.log("connected!");

    const collection = db.collection("students");

    const data = await collection.find({}).toArray();

    res.json(data);
  } catch (error) {
    res.status(500).send("Error occurred!");
  }
});

app.listen(8000, () => {
  console.log("server is running ok!");
});
