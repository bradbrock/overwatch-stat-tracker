// const mongoose = require('mongoose');
// const matchSession = mongoose.model('MatchSession');

exports.homePage = (req, res) => {
    res.render('home');
}

exports.record = (req, res) => {
    res.render('record');
}