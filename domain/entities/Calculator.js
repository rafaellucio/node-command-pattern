module.exports = (function () {

	let _current = 0;

	class Calculator {

		Operation(operator, operand) {

			switch(operator) {
				case '+': _current += operand; break;
				case '-': _current -= operand; break;
				case '*': _current *= operand; break;
				case '/': _current /= operand; break;
			}

			console.log(`Current value = ${_current} (following ${operator} ${operand})`);
		}

	}

	return Calculator;

})();