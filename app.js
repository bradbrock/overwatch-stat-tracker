const express = require('express');
const app = express();

require('dotenv').config({ path: 'variables.env' });

// app.get('/', function (req, res) {
//   res.send('BAR');

// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

module.exports = app;