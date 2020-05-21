const express = require("express");
const app = express();
const cors = require("cors");

const test = require("test");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started");
});
