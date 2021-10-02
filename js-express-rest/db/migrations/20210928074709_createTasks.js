
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id');
    table.text('body');
    table.boolean('completed');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
