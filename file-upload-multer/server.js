import express from "express";
import path from "path";
import fs from "fs";
import multer from "multer";

const app = express();
const port = 8000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const uploads = multer({ storage: storage });

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.post("/file-upload", uploads, async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
});

app.app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
