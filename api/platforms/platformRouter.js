const router = require('express').Router();
const db = require('../../data/models/platform-model.js');


router.post('/addplatform', (req, res) => {
    let { name } = req.body;

    db.add(name)
        .then(platform => {
            res.status(201).json(platform)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/platforms', (req, res) => {
    db.getAll()
        .then(platform => {
            res.status(201).json(platform);
        })
        .catch(err => {
            res.status(401).json(err);
        });
});

module.exports = router;