const express = require('express');
const db = require('../database/index')
const mongoose = require('mongoose');
const getRepos = require('../helpers/github');
var Promise = require("bluebird");
var mongoosePromise = Promise.promisifyAll(require('mongoose'))


mongoose.connect('mongodb://localhost/fetcher');

var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.text());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = req.body
  getRepos.getReposByUsername(username, (data) => {
    db.save(JSON.parse(data));
  });
  res.send('you just posted to the server!!')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.fetch((data) => {
    console.log(data, 'this is the data')
    res.send(data)
  })
});



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

