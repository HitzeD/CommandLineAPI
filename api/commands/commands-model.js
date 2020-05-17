const db = require('../../data/db-config.js');


function find() {
    return db('commands as c')
        .join('platforms as p', 'p.id', 'c.platform_id')
        .select('c.id', 'c.name', 'c.command', 'p.platform');
}

function findById(id) {
    return db('commands')
    .where({id})
    .first();
}

function createNewCommand(data) {
    return db('commands')
    .insert(data);
}

function updateCommand(id, data) {
    return db('commands')
    .where({ id })
    .update(data);
}

function deleteCommand(id) {
    return db('commands')
    .where({ id })
    .del();
}

function findPlatforms() {
    return db('platforms');
}

// function findByPlatform(name) {
//     return db('commands as c')
//     .join('platforms as p', 'p.platform', )
// }


module.exports = {
    find,
    findById,
    createNewCommand,
    updateCommand,
    deleteCommand,
    findPlatforms,
}