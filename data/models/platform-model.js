const db = require('../db-config.js');

module.exports = {
    getAll,
    findById,
    add,
}

function getAll() {
    return db('platforms').select();
}

function findById(id) {
    return db('platforms')
        .where({id})
        .first();
}

function add(name) {
    return db('platforms')
        .insert(name)
        .returning('*');
}