const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// app.get('/', function (req, res) {
//   res.send('bar');
// });

// router.get('/', (req, res) => {
//   res.send('Hey it works!');
// });

app.use('/', routes);


module.exports = app;
// module.exports = router;