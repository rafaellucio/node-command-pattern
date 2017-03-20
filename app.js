const express = require('express'), 
	  path = require('path'), 
	  favicon = require('serve-favicon'), 
	  logger = require('morgan'), 
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  Product = require('./domain/entities/Product')
;

global.db = mongoose.connect('mongodb://localhost:27017/comercialprado');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/product', (req, res) => {

	let product = new Product();

	product.Compute('+', 100)
	product.Compute('-', 50)
	product.Compute('*', 10)
	product.Compute('/', 2)

	product.Undo(4)
	product.Redo(3)

	res.json({product: product});

});

app.use(function(req, res, next) {
	res.status(404).json({commandName: 'Not Found'});
	next();
});

module.exports = app;