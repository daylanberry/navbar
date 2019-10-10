var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var searchSchema = new mongoose.schema({
  name: String,
  type: String,
  id: Number
});
