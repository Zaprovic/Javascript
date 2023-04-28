// const numbers = [1, 2, 3, 4, 5];

// for (i of numbers) {
//     console.log(i);
// }

const gen = function* () {
	yield 1;
	yield;
	yield 3;
	yield 4;
	yield 5;
};

const gen1 = gen();

console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

// while (true) {
// 	const { value, done } = gen1.next();

// 	if (done) {
// 		break;
// 	}

// 	console.log(value);
// }
