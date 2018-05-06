function add (a, b) {
	return a + b;
	
}

function subtract (a, b) {
	return a - b;
	
}

function sum (arr) {
	return arr.reduce((sum, val) => sum + val, 0);
	
}

function multiply (arr) {
	return arr.reduce((mul, val) => mul * val, 1);
	
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(number) {
	if (number !== 0 && number !== 1) {
		for (let i = number - 1; i >= 1; i--) {
			number *= i;
		}
		return number;
	} else {
		return 1;
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}