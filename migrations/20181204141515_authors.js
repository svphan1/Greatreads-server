exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments()
    table.string('firstName')
    table.string('lastName')
    table.text('biography')
    table.string('portraitUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
