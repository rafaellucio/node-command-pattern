const express = require('express'),
	  addCommand = express.Router();

const Command = require('./Command');

const AddCommand = (value) => {
    return new Command(add, sub, value);
};


addCommand.get('/add', (req, res) => {
	console.log(req.url)
	res.status(200).json({commandName: 'add'});
});

module.exports = addCommand;