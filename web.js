var express = require('express');
var http = require('http');
var gzippo = require('gzippo');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var app = express();
app.use(logger('dev'));
app.use(gzippo.staticGzip('' + __dirname));
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'.tmp')));
app.use(express.static(path.join(__dirname, 'app')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});