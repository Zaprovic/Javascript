# Promises: The callback killer

In the previous section, we discussd the callback hell, which is a phenomena that occurs when a callback function keeps calling itself recursively to fetch more inner data of an API. 

The syntaxis of a promise is as follows

```
const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("The promise was resolved");
	} else {
		reject("The promise was rejected");
	}
});
```

A `Promise` instance receives a callback function as an argument. This callback has two parameters an will execute a block of code *asynchronously*. The conditional statement is there to emphasize that a promise can be resolved or rejected according to what happens inside the function. 

Now to execute a promise we use some the special functions `then()` , `catch()` and `finally()`

```
promise.then((result) => {
	console.log(result);
}).catch(error => {
    console.log(error)
}).finally(out => {
    console.log("Promise settled")
});
```
Inside `then()` we put code related to the succesfull resolution of the promise, whereas in `catch()` it is all about the rejection. `finally()` is used to execute code no matter of the final status of the promise. 


## Data fetching
There is a very powerful API in Node called `fetch`, that allows to work with promises with literally a single line of code. 

Let's make a comparison of how the fetching was performed with purely vanilla JavaScript vs with `fetch`


**Before**

```
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";
function fetchData(urlApi, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", urlApi, true);

	xhr.onload = function () {
		if (this.status === 200) {
			callback(null, JSON.parse(xhr.responseText));
		} else {
			const error = new Error(`Error ${urlApi}`);
		}
	};
	xhr.send();
}

fetchData(`${API}/products`, function (error1, data1) {
	if (error1) return console.error(error1);
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		if (error2) return console.error(error2);

		fetchData(
			`${API}/categories/${data2?.category?.id}`,
			function (error3, data3) {
				if (error3) {
					console.error(erro3);
				}

                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name);
			}
		);

	});
});
```

**After (using promises and `fetch`)**
```
const API = "https://api.escuelajs.co/api/v1";

const loadText = (urlApi) => {
	return fetch(urlApi);
};

loadText(`${API}/products`)
	.then((response) => response.json())
	.then((products) => console.log(products))
	.catch((error) => console.log(error));

```

If you don't think `fetch` is one of the best things that could have existed in JavaScript, then you are out of your mind. Notice the major code simplification that this function provides. It is definitely one of the most important features out there. 

Another thing to realize is that a fetch is a promise by default, so then functions `then()` , `catch()` and `finally()` can be used. It also receives a second optional parameter, in which we can specify what type of request we want to make. 

### `fetch()` API: Making requests
We already know that `fetch()` is truly awesome, and we can many any type of request we want with it. But first let's see how exactly it needs to be manipulated.

When we use `fetch` , it returns a promise, so if we want to extract the data of a promise we use `then()` , `catch()` and `finally()`. If the data wants to be displayed in the console we can start by doing this

```
const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlAPI) => {
	return fetch(urlAPI);
};

fetchData(`${API}/products`)
	.then((response) => response.json());
```

The first call is solving the first promise that the `fetchData()` returns. This promise returns a *response* in the form of an object. However nothing guarantees that this response can be turned into a `.json` file, and there is a method called `.json()` that returns a promise that will only be resolved *if the response can be casted into json* and will be rejected otherwise. 

Until this point we have another promise that the `.json()` method is returning, so we need to apply `then()` again in order to see the actual content of the response

```
fetchData(`${API}/products`)
	.then((response) => response.json())
	.then((data) => console.log(data));
```
There is a slight problem with this API and is the fact that it will always be succesfully resolved no matter what. This means the `catch()` function will not work if we want to catch errors. For this we must first do a validation within the response that the `fetchData()` returns

```
fetchData(`${API}/products`)
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
        else{
            console.log(`Error fetching the data from: ${API}`);
        }
	})
	.then((data) => console.log(data));
```

If we want to make a POST request, we can create a new function called `postData()` like this

```
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
```







