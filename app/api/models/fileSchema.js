const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    md5: { type: String, required: true },
});

module.exports = mongoose.model('file', fileSchema, 'file')