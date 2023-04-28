const delay = (time, message) => {
	const promise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(message);
		}, time);
	});

	return promise;
};
