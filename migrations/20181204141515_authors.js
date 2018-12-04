exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments()
    table.string('firstName')
    table.string('lastName')
    table.string('biography')
    table.string('protraitUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
