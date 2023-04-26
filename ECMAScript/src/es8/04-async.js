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
			resolve(d);
		}, 1500);
	});
};


const dataAsync = async (d) => {
	const data1 = await dataGetter(d);
	console.log(data1);
};

dataAsync(data);
