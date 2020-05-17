const express = require('express');
const db = require('./commands-model.js');
const router = express.Router();

// This route goes '/commands/<route>

// GET stack

router.get('/', (req, res) => {
    return db.find()
    .then(commands => {
        res.json(commands);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve commands', err });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
    .then(command => {
        res.json(command);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve command', err });
    });
});

// router.get('/:name', (req, res) => {
//     const { name } = req.params;


// })

// POST

router.post('/', (req, res) => {
    const payload = req.body;

    db.createNewCommand(payload)
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
// Returns the ID of the object updated
router.put('/:id', (req, res) => {
    const command = req.body;
    const { id } = req.params;

    db.updateCommand(id, command)
    .then(upCommand => {
        res.status(200).json({ id });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update command', err });
    });
});


// DELETE

router.delete('/:id', (req, res) => {

    const { id } = req.params;


    db.deleteCommand(id)
    .then(command => {
        
        res.status(200).json({ message: `ID: ${ id } // Command Removed` });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete command', err});
    });
});

module.exports = router