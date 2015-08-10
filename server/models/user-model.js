var mongoose = require('mongoose');

var User = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('User', User);
