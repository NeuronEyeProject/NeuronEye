const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    domain: { type: String, required: true },
});

module.exports = mongoose.model('url', urlSchema, 'url')