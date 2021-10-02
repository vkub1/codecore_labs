
exports.up = function(knex) {
  return knex.schema.table('posts', table => {
      table.string('imgUrl');
  })
};

exports.down = function(knex) {
  return knex.schema.table('posts', table => {
      table.dropColumn('imgUrl');
  });
};
