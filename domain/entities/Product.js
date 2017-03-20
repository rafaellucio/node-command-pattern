const Calculator = require('./Calculator');
const CalculatorCommand = require('../../commands/CalculatorCommand');

module.exports = (function () {

	class Product {

		constructor() {
			this._current = 0;
			this._commands = [];
			this._calculator = new Calculator();
		}

		Redo(levels) {
			console.log(`\n---- Redo ${levels} levels `);

			for (let i = 0; i < levels; i += 1) {

				if (this._current < this._commands.length - 1) {
					let command = this._commands[this._current++];
					command.Execute();
				}

			}
		}

		Undo(levels) {
			console.log(`\n---- Undo ${levels} levels `);

			for (let i = 0; i < levels; i += 1) {

				if (this._current > 0) {
					let command = this._commands[--this._current];
					command.UnExecute();
				}
			}
		}

		Compute(operator, operand) {
			let command = new CalculatorCommand(this._calculator, operator, operand);
			command.Execute();

			this._commands.push(command);
      		this._current++;
		}
	}

	return Product;
	
})();