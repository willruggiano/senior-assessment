var express = require('express');
var router = express.Router();
var Message = require('./models/message-model');
module.exports = router;

router.get('/to/:id', function(req, res, next) {
  return Message.getAllWhereRecipient(req.params.id)
    .then(function(messages) {
      res.status(200).json(messages)
    })
    .then(null, next)
})

router.get('/from/:id', function(req, res, next) {
  return Message.getAllWhereSender(req.params.id)
    .then(function(messages) {
      res.status(200).json(messages)
    })
    .then(null, next)
})

router.post('/', function(req, res, next) {
  return Message.create(req.body)
    .then(function(message) {
      res.status(201).json(message)
    })
    .then(null, next)
})
