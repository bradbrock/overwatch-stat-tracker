// const mongoose = require('mongoose');
// const matchSession = mongoose.model('MatchSession');

exports.homePage = (req, res) => {
    res.render('home');
}

exports.foo = (req, res) => {
    res.render('foo');
}