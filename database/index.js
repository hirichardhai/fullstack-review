const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  forkCount: Number,
  repoURL: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  var obj = {};

  for (var i = 0; i < data.length; i++) {

  }
  // This function should save a repo or repos to
  // the MongoDB
}

var parseJSON = (JSON) => {
  obj = {}

for (var i = 0; i < JSON.length; i++) {
obj[JSON[i].id] = JSON[i]['html_url']
}
return obj;
}


module.exports.save = save;

