const express = require('express'),
	  addCommand = require('./AddCommand'),
	  SubCommand = require('./SubCommand'),
	  MulCommand = require('./MulCommand'),
	  DivCommand = require('./DivCommand'),
	  command = express.Router();

const Command = (execute, undo, value) => {
	this.execute = execute;
	this.undo = undo;
	this.value = value;
}

command.get('/', (req, res) => {
	console.log(Object.keys(req), req.baseUrl)
	res.status(200).json({commandName: 'Teste'});
});

command.get('/add', addCommand);

command.get('/sub', (req, res) => {
	res.status(200).json({commandName: 'sub'});
});

command.get('/mul', (req, res) => {
	res.status(200).json({commandName: 'mul'});
});

command.get('/div', (req, res) => {
	res.status(200).json({commandName: 'div'});
});

module.exports = command;