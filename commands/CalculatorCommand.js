const Command = require('./Command');
const Calculator = require('../domain/entities/Calculator');

module.exports = (function () {

	class CalculatorCommand extends Command {

		constructor(calculator, operator, operand) {
			super();

			this._calculator = calculator;
			this._operator = operator;
			this._operand = operand;
		}

		set Operator(value) {
			this._operator = value;
		}

		set Operand(value) {
			this._operand = value;
		}

		Execute() {
			this._calculator.Operation(this._operator, this._operand);
		}

		UnExecute() {
			this._calculator.Operation(this.Undo(this._operator), this._operand);
		}

		Undo(operator) {
			switch (operator)
			{
				case '+': return '-';
				case '-': return '+';
				case '*': return '/';
				case '/': return '*';
				default: throw new Error(`${operator}`);
			}
		}

	}

	return CalculatorCommand;

})();