
exports.up = function(knex) {
    return knex.schema
        .createTable('platforms', tbl => {
            tbl.increments();
            tbl.text('platform', 128)
                .unique()
                .notNullable();
        })
        .createTable('commands', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.text('command').notNullable();
            tbl.integer('platform_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('platforms')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('commands')
        .dropTableIfExists('platforms')
};
