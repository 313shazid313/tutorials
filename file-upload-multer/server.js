// Import required modules
import express from "express"; // Express framework for creating server
import path from "path"; // Helps to work with file paths (e.g. extensions)
import fs from "fs"; // File system module (create/check folders)
import multer from "multer"; // Middleware for handling file uploads

// Create express app
const app = express();

// Define server port
const port = 8000;

/*
  Configure storage for uploaded files using multer.diskStorage()
  This tells multer:
  - where to store files
  - how to name files
*/
const storage = multer.diskStorage({
  // Destination folder where files will be saved
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save inside "uploads" folder
  },

  // Set custom filename
  filename: function (req, file, cb) {
    // Create unique filename using current timestamp + original file extension
    const uniqueName = Date.now() + path.extname(file.originalname);

    // Pass filename to multer
    cb(null, uniqueName);
  },
});

/*
  Initialize multer middleware with storage configuration
  "uploads" will be used in routes to handle file upload
*/
const uploads = multer({ storage: storage });

/*
  Check if "uploads" folder exists
  If not, create it
*/
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

/*
  GET route for homepage
  Sends a simple HTML form to upload file
*/
app.get("/", async (req, res) => {
  try {
    res.send(`
        <h1>File upload server</h1>

        <!-- Form to upload file -->
        <form method="POST" action="/file-upload" enctype="multipart/form-data">
          
          <!-- File input (name must match multer field name) -->
          <input type="file" name="myfile" />

          <!-- Submit button -->
          <button type="submit">Upload File</button>
        </form>
    `);
  } catch (error) {
    console.log(error);
  }
});

/*
  POST route to handle file upload

  uploads.single("myfile") → middleware
  - accepts only ONE file
  - field name must be "myfile"
  - stores file in "uploads" folder
*/
app.post("/file-upload", uploads.single("myfile"), async (req, res) => {
  try {
    // Uploaded file info is available in req.file
    console.log(req.file);

    /*
      req.file contains:
      - fieldname
      - originalname
      - encoding
      - mimetype
      - destination
      - filename
      - path
      - size
    */

    // Send response to client
    res.send("file uploaded successfully " + req.file.fieldname);
  } catch (error) {
    console.log(error);
  }
});

/*
  Start server
*/
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
