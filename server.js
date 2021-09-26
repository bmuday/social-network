const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("morgan");
const helmet = require("helmet");

// Connection to the database
const db = require("./db");

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(logger("tiny"));

// Route middlewares

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
