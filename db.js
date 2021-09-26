const mongoose = require("mongoose");
require("dotenv").config();

const { USERNAME, PASSWORD, DATABASE } = process.env;
console.log(USERNAME, PASSWORD, DATABASE);
const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.xhllp.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected!!"))
  .catch((err) => {
    console.error(err);
  });
