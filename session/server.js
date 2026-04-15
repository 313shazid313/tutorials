// Import required modules
import express from "express";          // Express framework to create server
import session from "express-session"; // Middleware to handle sessions

// Create express app
const app = express();

/*
  Setup session middleware

  session() stores data on server and gives client a session ID (cookie)
*/
app.use(
  session({
    secret: "thisIsMySecretKey", // Used to sign/encrypt session ID (VERY IMPORTANT)

    resave: false,
    // Don't save session again if nothing changed
    // improves performance

    saveUninitialized: true,
    // Save new session even if it has no data yet

    cookie: {
      maxAge: 10000 * 60 * 60,
      // Session expiration time (in milliseconds)
      // 10000 * 60 * 60 = 10 hours

      httpOnly: true,
      // Cookie cannot be accessed via JavaScript (more secure)
    },
  }),
);

/*
  Home route
*/
app.get("/", (req, res) => {
  res.send(`welcome to the home page!`);
});

/*
  Login route

  Creates a session and stores user info
*/
app.get("/login", (req, res) => {
  // Save user info inside session
  req.session.user = "shazid";

  // Now this user will persist across requests
  res.send(`session created for user ${req.session.user}!`);
});

/*
  Dashboard route (Protected route)

  Only accessible if user is logged in
*/
app.get("/dashboard", (req, res) => {
  // Check if session exists
  if (req.session.user) {
    // User is logged in
    res.send(`welcome to your dashboard ${req.session.user}`);
  } else {
    // No session → user not logged in
    res.send("please Log In");
  }
});

/*
  Logout route

  Destroys session (removes user data)
*/
app.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.send("Error in logging out!");
    }

    // Session removed successfully
    res.send("Logged out successfully!");
  });
});

/*
  Start server
*/
app.listen(8000, () => {
  console.log("server is running ok!");
});