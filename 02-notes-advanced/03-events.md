# Events: User interaction

It is pointless to just be able to change our HTML document from a JS script, we could just to it from the HTML itself and it would be a lot easier. The reason it is important to be able to use JavaScript is from the fact that the language makes it capable of giving interaction to the website. We achieve this with ***event listening***

The key with DOM manipulation is to use it **whenever users interact with the website** and listening events it's all about catching in code all of these interactions, which can be a button click, hovering over a container and so on. 

As an example, say we have two input containers and we want to add the result and show it to the user. The basic HTML index would look like this: 

**`index.html`**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
</head>
<body>

    <header>
        <h1>
            Event listening
        </h1>
    </header>

    <main>
        <input type="text" id="calc-one" placeholder="Type something here">

        <input type="text" id="calc-two" placeholder="Type something here">

        <button id="btn-calculate">Calculate</button>
    </main>
    
</body>

<script src="./script.js"></script>
</html>
```
The event we want to keep track of is the button clicking, as this happen, we will generate a new paragraph with the sum of the numbers in both input containers. 

**`script.js`**

```
const h1 = document.querySelector("h1");
const v1 = document.querySelector("#calc-one");
const v2 = document.querySelector("#calc-two");
const btn = document.querySelector("#btn-calculate");
```
First we are grabbing all the tags as JavaScript variables using `.querySelector()`. Here the main variables we need are `v1` , `v2` and `btn`.

As we know, `btn` is an object, and there is a key named `onclick` that has a default value of `null` . We will be changing it so we can listen to the clicking. 


```
btn.setAttribute("onclick","btnOnClick()")

function btnOnClick(){
    console.log("Listening to clicking...")
}

```

But or main goal is to add the two numbers and show the outcome in the HTML document. Therefore instead of console logging we can do the following

```
const h1 = document.querySelector("h1");
const v1 = document.querySelector("#calc-one");
const v2 = document.querySelector("#calc-two");
const btn = document.querySelector("#btn-calculate");
const out = document.querySelector(".outcome");

btn.setAttribute("onclick","btnOnClick()")

function btnOnClick(){
    const sum = Number(v1.value) + Number(v2.value);
    out.innerText = sum;   
}
```

Here we stored the value of the sum in a variable called `sum` . Explicit coercion must be applied because by default the values of an input are read as of type string. After that we created a new paragraph of class `outcome` and store it in a variable with `.querySelector()`. Finally we changed the content of `out` by inserting the sum of the two input numbers. 






