const multiply = (a, b) => {
	return a * b;
};

const square = (n) => {
	return multiply(n, n);
};

const printSquare = (n) => {
	const squared = square(n);
	console.log(squared);
};
