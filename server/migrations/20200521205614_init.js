exports.up = function (knex) {
  return knex.schema.createTable("todos", function (table) {
    table.increments();
    table.string("text").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};
