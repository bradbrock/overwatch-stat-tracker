const mongoose = require('mongoose');
const SessionData = mongoose.model('MatchSession')

exports.homePage = (req, res) => {
    res.render('home');
}

exports.record = (req, res) => {
    res.render('record');
    console.log("record function");
}

exports.test = (req, res) => {
    console.log("test function");
}

exports.save = (req, res) => {
    res.json(req.body);
    console.log(req.body);
}