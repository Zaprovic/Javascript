# Asynchronous functions
Recall that so far we have been manipulating promises using `then()` , `catch()` and `finally()` . But this becomes a very repetitive process and the code starts to become overwhelming to read. Asynchronous functions have the aim to provide a better and cleaner syntaxis to handle all of this promises.

```
const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlAPI) => {
	return fetch(urlAPI);
};

fetchData(`${API}/products`)
	.then((response) => response.json())
	.then((data) => console.log(data));
```
This is the code we had before, if there was the case in which there were more nested promises tis will become in a bunch of `then()` calls Instead we can use the reserved keywords of `async` and `await` like this


```
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
```

In order to use `await`, the function has to be asynchronous by using `async` . The first block of code handles only the promise execution, but for its resolution there is another function, in this case it is IIFE that is in charge of executing the promise response in case it is successfull and otherwise it will yield an error. 

