const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matcher = regex.exec("2022-01-02");
console.table(matcher);

const obj = {
	name: "Brandon",
	lastName: "Eich",
	age: 40,
	country: "US",
};

const { name, lastName, ...val } = obj;

console.log(name);
console.log(val);

const myFunction = (a, b, ...rest) => {
	console.log(a);
	console.log(b);
	console.log(rest);
};

myFunction(1, 2, 3, 4, 5);
