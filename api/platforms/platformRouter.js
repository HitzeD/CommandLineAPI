const router = require('express').Router();
const db = require('../../data/models/platform-model.js');


router.post('/addplatform', (req, res) => {
    let { name } = req.body;

    db.add(name)
        .then(platform => {
            res.status(201).json(name)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});
