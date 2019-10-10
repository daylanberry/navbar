var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');// we're connected!
});

// var searchSchema = new mongoose.schema({
//   name: String,
//   type: String,
//   id: Number
// });
