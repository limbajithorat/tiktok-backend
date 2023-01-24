const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes");
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.zw68x1x.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" DB Connected successfully");
});
app.use(Router);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
