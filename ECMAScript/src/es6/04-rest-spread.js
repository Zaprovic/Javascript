// OG
var names = ["Brandon", "Ryan"];
console.log(names[0], names[1]);

// ES6
let fruits = ["Apple", "Lemon"];
let [a, b] = fruits;

console.log(a, fruits[1]);

let user = { username: "brandon123", age: 40 };
let { username, age } = user;
console.log(username, age);

// Spread operator
let person = { name: "Brandon", age: 40 };
let country = "US";

let data = { ...person, country };
console.log(data);

// rest
const sum = (n, ...values) => {
	console.log(values);
	console.log(n + values[0]);
};

sum(1, 4, 5, 6, 7);
