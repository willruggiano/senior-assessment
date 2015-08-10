var express = require('express');
var app = express();

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

module.exports = app;