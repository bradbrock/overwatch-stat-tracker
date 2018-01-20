const mongoose = require('mongoose');

const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major <= 7) {
    console.log('Running from start.js!!');
}

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});