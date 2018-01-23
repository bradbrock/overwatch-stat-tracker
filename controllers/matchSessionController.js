exports.homePage = (req, res) => {
    res.render('home');
}

exports.record = (req, res) => {
    res.render('record');
}

exports.save = (req, res) => {
    // console.log(req.body);
    res.json(req.body);
}