
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
        table.increments('id');
        table.string('title');
        table.text('body');
        table.integer('viewCount');
        table.string('tags');
        table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
