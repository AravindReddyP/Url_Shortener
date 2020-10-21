const mongoose = require('mongoose');
const shortId = require('shortid');

//model that stores all our short url information

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

// this hooks up our db with our model
module.exports = mongoose.model('ShortUrl', shortUrlSchema);
