exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", function (table) {
    table.increments()
    table.string("title")
    table.string("genre")
    table.text("description")
    table.string("coverUrl")
    table.string("authors")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books")
};
