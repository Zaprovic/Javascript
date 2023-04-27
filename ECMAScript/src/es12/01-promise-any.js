class Car {
	#brand;
	#mode;
	#year;

	constructor(brand, model, year) {
		this.#brand = brand;
		this.#model = model;
		this.#year = year;
	}

	get model() {
		return this.#brand;
	}

    set model(model){
        this.#model = model
    }
}

const car1 = new Car("Audi", "Q7", 2021);

car1.brand = "BMW";
