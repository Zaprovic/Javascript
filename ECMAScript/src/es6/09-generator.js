const getId = function* () {
	let id = 1;

	while (true) {
		yield id++;
	}
};
