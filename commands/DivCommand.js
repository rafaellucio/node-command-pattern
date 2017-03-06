const Command = require('./Command');

const DivCommand = function (value) {
    return new Command(div, mul, value);
};

module.exports = DivCommand;