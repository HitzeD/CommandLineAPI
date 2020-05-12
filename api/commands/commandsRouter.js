const express = require('express');
const db = require('../../data/db-config.js');
const router = express.Router();

// This route goes '/commands/<route>

// GET stack

router.get('/', (req, res) => {
    db('commands')
    .then(commands => {
        res.json(commands);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve commands' });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('commands').where({ id }).first()
    .then(command => {
        res.json(command);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve command' });
    });
});

// POST

router.post('/', (req, res) => {
    const payload = req.body;

    db('commands').insert(payload)
    .then(ids => {
        db('commands').where({ id: ids[0] })
        .then(newCommand => {
            res.status(201).json(newCommand);
        });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to store data' });
    });
});

// PUT



// DELETE

// WORK IN PROGRESS
router.delete('/:id', async (req, res) => {

        const { id } = req.params;

    try {

        return await db('commands').where('id', { id }).del();

    } catch {

        return res.status(500).json({ message: 'Failed to delete command' });

    }

});

module.exports = router