
exports.up = function(knex) {
  return knex.schema.createTable('bills', table=> {
      table.increments('id');
      table.float('billTotal');
      table.float('taxPercent');
      table.float('tipPercentage');
      table.integer('numberOfPeople');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bills');
};
