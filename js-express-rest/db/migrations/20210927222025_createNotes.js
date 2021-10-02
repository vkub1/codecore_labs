
exports.up = function(knex) {
  return knex.schema.createTable('notes', table => {
        table.increments('id');
        table.text('content');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};
