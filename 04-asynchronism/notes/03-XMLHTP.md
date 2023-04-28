# Working with APIs: XMLHTTP request

An XMLHTTP request is one of the web APIs provided by the browser that allows JavaScript code to make an HTTP request to servers in the background, without having to reload the page.

This document will have a lot of backend technical terms, so it much better to start off from here. Backend development is basically everything that has to do on behind the scenes when users make requests to the browser, which is what frontend deals with.

---

## More about APIs

We have been using the term API a lot but, what exactly is it? It stands for Application Programming Interface, and it is the way we communicate with other systems. In backend we are very much interested in communicating with web services that run under the HTTP protocol.

There is a standard form to work with API and that is the **REST API structure**. Recall that APIs are in charge to receive requests and give back responses, and this responses are usually handled in `.json` files when using a REST API.

A REST API will always follow these methods to manipulate requests:

- GET: Used to create
- POST: Used to read
- PUT / PATCH: Used to modify
- DEELETE: Used to remove

---

## HTTP request

A user request is received by an API, and this is the starting point of the backend development process. These are in the form of HTTP requests, which stands for HyperText Transfer Protocol, and it is nothing more than a standardized way that makes information be able to spread across the web. An HTTP request consist of a request line, a header and an optional message.

Any HTTP request will come with a **status code** that will give information on how was the request processed

- `1XX` : indicates information directly to the clients.

- `2XX` : indicates that responses were given successfully.

- `3XX` : indicates information about re-directions.

- `4XX` : indicates errors from the client. (The `404 error` indicates the client is searching for a non existing webpage).

- `5XX` : indicates errors from the server. (The `504 error` indicates there is a gateway timeout).

---

Now in sumamry, XMLHTTP is just an API that handles HTTP requests, with the advantage pages do not have to be reloaded every time a request is made.

XMLHTTP objects are not natively supported in Node, so in order to create an instance to which we can check its attribute we do the following

```
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();

console.log(xhr);
```

This is useful before continuing to work with this API, because here we usually do a lof of manipulations to these attributes.

## AJAX

Asynchronous JavaScript & XML, it is a very powerful and useful technology to send and receive data asynchronously. The curious part about this is the XML part, which nowadays has been pretty much deprecated and changed to the JSON format.

<center>

![](./../imgs/workflow.png)

</center>

This is a schematic representation of the normal workflow of a website. Clients make requests and the backend sends responses. But notice that the AJAX engine can also handle request in an asynchronous way without having to reload a webpage.

The way this is achieved is first making a JS call with libraries such as JQuery or Axios or even with vanilla
JavaScript.

The servers returns data in the form of JSON or sometimes XML and plain text, where the requests are done via an `XMLHttpRequest` object.

XMLHttpRequests are provided in the browser's environment and it's commonly used with the HTTP protocol. It can work with data other than XML, which is why JSON is preferred.

Some of the most popular libraries to make AJAX calls are

- JQuery
- Axios
- Superagent
- Fetch API
- Prototype
- Node HTTP

Plain JavaScript can also be used, and it is good practice to at least know how are these requests made like this, before hoping to use a library.

### Creating requests with JavaScript: Data fetching

We have a scenario in which there is a webpage with a single button. As soon as you click that button you want to retrieve in the console some information from an API, it can be plain text, XML or JSON files.

First we start with an `index.html` file that defines the structure of the webpage. We can embed a script tag with JavaScript code, or make a separate file for that.

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ajax</title>
	</head>
	<body>
		<button id="button">Get text file</button>

		<script>
			//Creating even listenter
			const btn = document.querySelector("#button");
			btn.addEventListener("click", loadText);

			const loadText = (urlAPI, callback) => {
				let xhr = new XMLHttpRequest();

				xhr.open("GET", urlAPI, true);
				xhr.onload = function () {
					if (this.status === 200) {
                        callback(null,JSON.parse(xhr.responseText));
					} else{
                        const error = new Error(`Error ${urlAPI}`);
                        return callback(error, null);
                    }
				};

				//sends request to the client
				xhr.send();
			};
		</script>
	</body>
</html>


```

There is an event listener that will detect the click of the button and execute the function `loadText()`, which is function that takes an url and a callback as arguments. 

In `loadText()` first we define a variable `xhr` of type `XMLHttpRequest` to work with during the process. Once it is defined we can check all of its attributes and functions by logging it.

We will work with the `.open()` function that receives three main parameters. The first one is the type of request of an REST API structure, the second one the file or API we are trying to fetch data from, and the third one is a boolean that validates if we want this fetching to be asynchronous (true) or synchronous (false).

Then there are two ways to continue: one is using `.onload()` and the other is with `.onreadystate()`. This last one is the older implementation and they both differ in the fact that `.onload()` does not require to validate the _ready state_.

**With `onload()`**

```
xhr.onload = function () {
    if (this.status === 200) {
        console.log(this.responseText);
    }

};
```

**With `onreadystate()`**

```
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
```

The ready state is just a number that represent the status of the request.

- `0` : Client has created request and request has not been initialized
- `1` : Request has established connection with server
- `2` : Request has been received
- `3` : Response is being loaded
- `4` : Fetching operation is completed

During the request process there are also some other useful methods included in the XMLHttpRequest API, such as `.onprogress()` and `.onerror()` . This last one is very useful to handle an error during the process. 

Now it's time to fetch the data. For this it is just a matter of executing `loadText()` and that's it. 

Notice that `loadText()` takes as an argument a callback function. This callback takes two parameters because that is how it was defined before. These parameters will be an error and some data. 

First we make a call to retrieve the information of products (as an example) from the API url


```
loadText(`${API}/products`, function(error1, data1){
    if(error1){
        return console.error(error1);
    }
})

```
The validation is to check for any errors during the request process. But if there aren't any we can continue to fetch more data related to the products, like for example some specific type of product or an attribute of these. To do this, we make a recursive call of the function, where the input url will be the same but with a deeper level of search, and the validation will be the same. 

```
loadText(`${API}/products`, function(error1, data1){
    if(error1){
        return console.error(error1);
    }

    loadText(`${API}/products/data1[0].id?`, function(error2, data2){
        if(error2){
            return console.error(error2);
        }
    })
})
```

Notice that the usage of optional binding is very handy, because we are making requests of information that we are not sure whether they exist in the API or not. But if you take a closer look, it is easy to realize that these recursive calls could keep going on and on. When this happens, we say we arrive to a **callback hell**