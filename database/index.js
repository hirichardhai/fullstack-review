const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherz');

let repoSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.Number, unique: true},
  repoURL: String,
  userName: String,
  forkCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  for (var i = 0; i < data.length; i++) {

      var document = new Repo({
        id: data[i].id,
        repoURL: data[i].html_url,
        userName: data[i].owner.login,
        forkCount: data[i].forks_count
      })

      document.save((err) => {
        if (err) return console.error(err);
      })
  }
}

let fetch = (cb) => {
  Repo.find((err, data) => {
    if (err) console.error(err);
    cb(data);
  })
};

module.exports.save = save;
module.exports.fetch = fetch;