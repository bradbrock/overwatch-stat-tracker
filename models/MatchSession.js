const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const matchSessionSchema = new mongoose.Schema({
    mapName: String
});

module.exports = mongoose.model('matchSession', matchSessionSchema);