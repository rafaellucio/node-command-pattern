const Command = require('./Command');

var MulCommand = function (value) {
    return new Command(mul, div, value);
};

module.exports = MulCommand;