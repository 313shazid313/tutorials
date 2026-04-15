import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => {
    app.listen(8000, () => {
      console.log(`server is ok!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const saltRounds = 10;

    const hashed = await bcrypt.hash(password, saltRounds);

    await User.create({ name, email, password: hashed });
    res.status(201).json({ message: "user created successfully!" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      const bcryptCompare = await bcrypt.compare(password, findUser.password);

      if (bcryptCompare === true) {
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

const auth = async (req, res, next) => {
  const token = await req.headers.authorization;

  if (!token) {
    return res.json({ message: "No token found!" });
  }

  try {
    const data = jwt.verify(token, "shhhhh", function (err, decode) {
      if (err) {
        return res.json({ message: "token is not valid" , err});
      }
    });

    req.userId = data.findUser._id; //! userId is a variable
    next();
  } catch (error) {
    console.log(error);
  }
};

// protected route
app.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json({
      message: `this is protected data for user ${req.userId}`,
      user,
    });
  } catch (error) {
    console.log(error);
  }
});
