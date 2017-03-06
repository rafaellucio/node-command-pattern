const express = require('express'), 
	  path = require('path'), 
	  favicon = require('serve-favicon'), 
	  logger = require('morgan'), 
	  bodyParser = require('body-parser'),
	  command = require('./commands/Command'),
	  mongoose = require('mongoose')
;

global.db = mongoose.connect('mongodb://localhost:27017/calculator');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/command', command);

app.use(function(req, res, next) {
	res.status(404).json({commandName: 'Not Found'});
	next();
});

module.exports = app;
