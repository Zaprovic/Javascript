const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlAPI) => {
	return fetch(urlAPI);
};

const postData = (urlAPI, data) => {
	const response = fetch(urlAPI, {
		method: "POST",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return response;
};

fetchData(`${API}/products/1`)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			console.log(`Error fetching the data from: ${API}`);
		}
	})
	.then((data) => console.log(data));
