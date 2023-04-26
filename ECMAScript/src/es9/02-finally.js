const data = [
	{
		id: 1,
		title: "Iron Man",
		year: 2008,
	},
	{
		id: 2,
		title: "Spiderman Homecoming",
		year: 2017,
	},
	{
		id: 3,
		title: "Avengers : Endgame",
		year: 2019,
	},
];

const dataGetter = (d) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = d.find((item) => {
				return item.title === "Iron Man";
			});

			if (result) {
				resolve(result);
			} else {
				reject("No data found for that title");
			}
		}, 1500);
	});
};

const out = async () => {
	try {
		const getResult = await dataGetter(data);
		console.log(getResult);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Promise settled");
	}
};

out();
