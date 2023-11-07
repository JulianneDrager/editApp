const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

require("./models/editData");
const router = require("./routes/editRoutes");

// app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors()); // always register CORS before other request handling middleware
app.use(express.json()); // you only need this once

const mongoURI =
  "mongodb+srv://edit-web:nzYAQCe7sytuEbKw@edit-website.bffdzne.mongodb.net/?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI);

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

conn.once("open", () => {
  console.log("Connection Successful");
});

conn.on("error", console.error.bind(console, "MongoDB connection error:"));

// Register API routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Register client routes and middleware
const CLIENT_BUILD_DIR = path.join(__dirname, "../client/build");

app.use(express.static(CLIENT_BUILD_DIR));
// DONT DELETE!
app.use("/", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express running PORT ${PORT}`);
});
