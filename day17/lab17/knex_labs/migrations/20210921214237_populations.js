
exports.up = function(knex) {
    return knex.schema.createTable('populations', table => {
        table.bigIncrements('id');
        table.integer('year');
        table.integer('quantity');
        table.bigInteger('country_id')
            .unsigned()
            .index()
            .references('id')
            .inTable('countries');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('populations');
};
