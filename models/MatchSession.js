const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const matchSessionSchema = new mongoose.Schema({
    // mapName: String,
    heroPlayed: [String]
    // win: false
});

module.exports = mongoose.model('MatchSession', matchSessionSchema);