
exports.up = function(knex) {
    return knex.schema.createTable('commands', tbl => {
        tbl.increments();
        tbl.text('name').notNullable();
        tbl.text('command').notNullable();
        tbl.text('platform');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('commands');
};
