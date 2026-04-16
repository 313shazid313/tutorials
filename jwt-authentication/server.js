import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => {
    // Start server only after successful DB connection
    app.listen(8000, () => {
      console.log(`server is ok!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Define user schema for MongoDB collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // user name is required
  email: { type: String, required: true, unique: true }, // email must be unique
  password: { type: String, required: true }, // hashed password stored here
});

// Create User model from schema
const User = mongoose.model("User", userSchema);

/**
 * USER SIGNUP ROUTE
 * - Checks if user already exists
 * - Hashes password before storing
 * - Creates new user in database
 */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists with same email
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const saltRounds = 10;

    // Hash the password for security
    const hashed = await bcrypt.hash(password, saltRounds);

    // Save user with hashed password
    await User.create({ name, email, password: hashed });

    res.status(201).json({ message: "user created successfully!" });
  } catch (error) {
    console.log(error);
  }
});

/**
 * USER LOGIN ROUTE
 * - Verifies user email
 * - Compares hashed password
 * - Generates JWT token on success
 */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const findUser = await User.findOne({ email: email });

    if (findUser) {
      // Compare entered password with hashed password
      const bcryptCompare = await bcrypt.compare(password, findUser.password);

      if (bcryptCompare === true) {
        // Generate JWT token for authentication
        var token = jwt.sign({ findUser }, "shhhhh");

        res.status(200).json({ message: "Welcome!", token });
      } else {
        res.status(404).json({ message: "invalid password!" });
      }
    } else {
      res.status(404).json({ message: "email does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

/**
 * AUTH MIDDLEWARE
 * - Checks if token exists in request headers
 * - Verifies JWT token
 * - Extracts userId from token
 */
const auth = async (req, res, next) => {
  const token = await req.headers.authorization;

  // If no token is provided
  if (!token) {
    return res.json({ message: "No token found!" });
  }

  try {
    // Verify JWT token
    const data = jwt.verify(token, "shhhhh", function (err, decode) {
      if (err) {
        return res.json({ message: "token is not valid", err });
      }
    });

    // Store user ID from decoded token into request object
    req.userId = data.findUser._id;

    // Move to next middleware/route
    next();
  } catch (error) {
    console.log(error);
  }
};

// PROTECTED ROUTE
// Only accessible if valid token is provided
app.get("/profile", auth, async (req, res) => {
  try {
    // Fetch user details excluding password
    const user = await User.findById(req.userId).select("-password");

    res.json({
      message: `this is protected data for user ${req.userId}`,
      user,
    });
  } catch (error) {
    console.log(error);
  }
});