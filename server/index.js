const express = require("express");
const cors = require("cors");
const knex = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  knex
    .select()
    .from("todos")
    .then((value) => {
      res.json(value);
    });
});

app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body;
    knex("todos")
      .returning("id")
      .insert({ text: text })
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started");
});
