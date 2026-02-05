const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

const port = process.env.port || 5000;


connectDB()

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.use("/", (req, res) => {
  res.send("API is running...");
});
// app.use("/api/users", require("./routes/userRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});