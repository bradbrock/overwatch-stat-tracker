// const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
console.log('Running from start.js!!!');
const app = require('./app');
app.set('port', process.env.PORT || 7775);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});