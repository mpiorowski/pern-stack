const express = require("express");
const cors = require("cors");
const knex = require("./db");

const app = express();
//middleware
app.use(cors());
app.use(express.json());

//services
const todos = require("./services/todos/todos-service");
app.use(todos);

app.listen(5000, () => {
  console.log("server has started");
});
