exports.up = function (knex) {
  return knex.schema.createTable("todos", function (table) {
    table.increments();
    table.string("text").notNullable();
    table.boolean("done").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
};

exports.down = function (knex) {};
