var mongoose = require('mongoose');
var Promise = require('bluebird')

var User = mongoose.model('User')

var Message = new mongoose.Schema({
  subject: {
    type: String,
    default: 'No Subject'
  },
  body: {
    type: String,
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

Message.statics.getAllWhereSender = function(id) {
  return this.find({ 'from': id })
    .populate('from to')
    .exec()
}

Message.statics.getAllWhereRecipient = function(id) {
  return this.find({ 'to': id })
    .populate('from to')
    .exec()
}

Message.methods.truncateSubject = function(i, e) {
  this.subject = this.subject.slice(0, i)
  if (e) this.subject += '...'
  return this
}

module.exports = mongoose.model('Message', Message);
