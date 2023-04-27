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

const dataGetter = (d, titles) => {
	const promises = titles.map((title) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const result = d.find((item) => item.title === title);

				if (result) {
					resolve(result);
				} else {
					reject(`No data found for title: ${title}`);
				}
			}, 1500);
		});
	});

	return Promise.allSettled(promises);
};



const titles = ["Iron Man", "Spiderman Homecoming"];

const out = async () => {
	try {
		const getResult = await Promise.all([dataGetter(data, titles)]);
		console.log(getResult);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Promise is settled");
	}
};

out();
