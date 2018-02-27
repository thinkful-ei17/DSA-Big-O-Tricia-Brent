'use strict';
let counter = 0;

function fibonacci(n) {
	counter++;
	// Base case
	if (n <= 0) {
		return 0;
	}
	// Base case
	if (n <= 2) {
		return 1;
	}
	// Recursive case
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
	counter = 0;
	fibonacci(n);
	console.log(n, counter);
}

for (let i = 0; i < 25; i++) {
	printFibonacci(i);
}