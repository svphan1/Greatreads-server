exports.up = function(knex, Promise) {
  return knex.schema.createTable("book_author", function (table) {
    table.increments()
    table.integer("books_id").references("books.id").unsigned().onDelete("cascade")
    table.integer("authors_id").references("authors.id").unsigned().onDelete("cascade")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("book_author")
};