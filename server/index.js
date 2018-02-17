const express = require('express');
const save = require('../database/index').save
const mongoose = require('mongoose');
const getRepos = require('../helpers/github');


mongoose.connect('mongodb://localhost/fetcher');

var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.text());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!

  var username = req.body
  var data = getRepos.getReposByUsername(username);
  save(data);
  res.send('you just posted to the server!!')
  console.log(username);

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

