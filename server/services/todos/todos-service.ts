import express = require("express");
import knex = require("../../db");
import { toUnicode } from "punycode";

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
      .from<Todos>("todos")
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
      .from<Todos>("todos")
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
        if (value > 0) {
          res.json(value);
        } else {
          res.status(404);
          res.json(false);
        }
      });
  } catch (error) {
    console.log(error.message);
  }
});

export = router;
