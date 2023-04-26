class Animal {
	constructor(name, type) {
		(this.name = name), (this.type = type);
	}
}

const animal1 = new Animal("Rocky", "Dog");
console.log(animal1);
