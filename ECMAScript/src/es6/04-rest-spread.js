// OG
var names = ["Brandon", "Ryan"];
console.log(names[0], names[1]);

// ES6
let fruits = ["Apple", "Lemon"];
let [a, b] = fruits;

console.log(a, fruits[1]);

let user = { username: "brandon123", age: 40 };
let { username, age } = user;
console.log(username,age);
