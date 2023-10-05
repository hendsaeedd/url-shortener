const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('url', shortUrlSchema)