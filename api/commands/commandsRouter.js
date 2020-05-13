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
        res.status(500).json({ message: 'Failed to retrieve commands', err });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('commands').where({ id }).first()
    .then(command => {
        res.json(command);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve command', err });
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
        res.status(500).json({ message: 'Failed to store data', err });
    });
});

// PUT

router.put('/:id', (req, res) => {
    const command = req.body;
    const { id } = req.params;

    db('commands').where({ id }).update(command)
    .then(upCommand => {
        res.status(200).json(upCommand);
    })
    .catch(err => {
        res.status(500).json({ message: 'Fialed to update command', err });
    });

});


// DELETE

// WORK IN PROGRESS
router.delete('/:id', async (req, res) => {

    const { id } = req.params;

    // try {

    //     const count = await db('commands').where({ id }).del();

    //     if (count) {
    //         res.json(count);
    //     } else {
    //         res.status(400).json({ message: "Command not found" });
    //     }

    // } catch {

    //     return res.status(500).json({ message: 'Failed to delete command' });

    // }

    db('commands').where({ id }).del()
    .then(command => {
        res.status(200).json(command);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete command', err});
    });
});

module.exports = router