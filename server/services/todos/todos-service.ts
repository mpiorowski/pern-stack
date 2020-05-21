import express = require("express");
import knex = require("../../db");

const router = express.Router();
router.use(express.json());

interface Todos {
  id: number;
  text: string;
  done: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

router.get("/todos", async (req, res) => {
  try {
    knex
      .select()
      .from("todos")
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    knex
      .select()
      .from("todos")
      .where("id", id)
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/todos", (req, res) => {
  try {
    const { text } = req.body;
    knex<Todos>("todos")
      .returning("*")
      .insert({ text: text })
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    knex("todos")
      .returning("*")
      .delete()
      .where("id", id)
      .then((value) => {
        console.log(value);
        if (value.lenght > 0) {
          res.json(value.lenght);
        } else {
          res.status(404);
          res.json(false);
        }
      });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
