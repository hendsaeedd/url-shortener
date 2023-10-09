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
        const original = req.body.original;
        // short url
        // const short = 'http://localhost:3000/' + req.body.short;
        const short = req.body.short;
        // create new url
        const newUrl = new url({ original, short });
        await newUrl.save();
        res.status(200).json(newUrl);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});

module.exports = router;
