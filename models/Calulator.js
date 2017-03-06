mdoule.exports = () => {
	const Schema = require('mongoose').Schema;

	const Calculator = Schema({
		value: {
			type: Number,
			required: true
		}
	});

	return db.model('calculator', Calculator)
}