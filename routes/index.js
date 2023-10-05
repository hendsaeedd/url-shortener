const router = require('express').Router();
const url = require('../models/urlModel');

/* GET home page. */
router.get('/', async (req, res) => {
    try {
        const urls = await url.find();
        res.render('index', { title: 'Express', urls });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});


// create new url
router.post('/create', async (req, res) => {
    try {
        const { original, short } = req.body;
        // create new url
        const newUrl = new url({ original, short });
        await newUrl.save();
        res.status(200).json(newUrl);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});

module.exports = router;
