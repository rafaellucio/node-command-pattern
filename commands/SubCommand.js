const Command = require('./Command');

const SubCommand = (value) => {
    return new Command(sub, add, value);
};

module.exports = SubCommand;