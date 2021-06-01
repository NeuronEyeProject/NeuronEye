const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    domain: {type: String, required: true}
});

module.exports = mongoose.model('domain', domainSchema)