var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/searchterms', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');// we're connected!
});

var searchSchema = new mongoose.Schema({
  name: String,
});

let search = mongoose.model('search', searchSchema);




  search.create(
    {name: 'men'}
    )
