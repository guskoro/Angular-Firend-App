var express = require('express');
var bodyParser = require('body-parser');
var friendCtrl = require('./api/friend/friend.controller');
var app = express();
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/api/friends', friendCtrl.list);
app.post('/api/friends', friendCtrl.add);

app.use(function(req, resp) {
  resp.status(440);
  resp.send('Error File not Found');
});

// set port and start webserver
app.listen('3000', function() {
  console.log('Server running at http://localhost:3000');
});
