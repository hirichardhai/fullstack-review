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
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var obj = {};
    obj.forkCount = data[i].forks_count;
    obj.repoURL = data[i]['html_url']
    var data = new Repo(
      obj
    )
    data.save((err) => {
      if (err) return console.error(err);
    })
  }
  // This function should save a repo or repos to
  // the MongoDB
}

// var parseJSON = (JSON) => {
//   obj = {}
// for (var i = 0; i < JSON.length; i++) {
//   obj['forkCount'] = data[i].forkCount;
//   obj['repoUrl'] = data[i]['html_url']
// }
// return obj;
// }





module.exports.save = save;

