const router = require('express').Router();
const url = require('../models/urlModel');

router.get('/:id', async (req, res) => {
  try {
    
    const urlData = await url.findOne({ short: req.params.id });
    if (urlData) {

      // redirect to the original url
      return res.redirect(urlData.original);
    } else {
      return res.status(400).json('URL not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
});

module.exports = router;