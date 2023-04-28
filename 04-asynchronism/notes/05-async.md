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


