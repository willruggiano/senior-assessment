var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();

var npmPath = path.join(__dirname, '..', 'node_modules'),
    indexHtmlPath = path.join(__dirname, 'index.html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

app.use(express.static(npmPath))
app.use('/users', require('./users-router'))
app.use('/messages', require('./messages-router'))

app.get('/*', function(req, res, next) {
  res.status(200).sendFile(indexHtmlPath)
})

module.exports = app;
