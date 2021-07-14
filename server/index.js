const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const path = require("path");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static("api"));
// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/api", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});