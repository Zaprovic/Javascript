const API = "https://api.escuelajs.co/api/v1";

// const fetchData = (urlAPI) => {
// 	return fetch(urlAPI);
// };

// fetchData(`${API}/products`)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

const fetchData = async (urlAPI) => {
	const response = await fetch(urlAPI);
	const data = await response.json();

	console.log(data);
};

(async () => {
	try {
		const data = await fetchData(`${API}/products`);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();

