// const data = [
// 	{
// 		id: 1,
// 		title: "Iron Man",
// 		year: 2008,
// 	},
// 	{
// 		id: 2,
// 		title: "Spiderman Homecoming",
// 		year: 2017,
// 	},
// 	{
// 		id: 3,
// 		title: "Avengers : Endgame",
// 		year: 2019,
// 	},
// ];

// const dataGetter = (d) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(d);
// 		});
// 	}, 1500);
// };

// dataGetter().then((df) => console.log(data));

const delay = (time, message) => {
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(message);
		}, time);
	});
};

delay().then(m => {console.log(message)})
