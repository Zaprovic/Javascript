# Callbacks

A callback is a function that we embed as an argument inside another function, in order to execute the code that the outermost function provides.

Now why is this useful and what does it have to do with asynchronism? Callbacks are useful because their primary goal is to allow a program to continue executing while a long-running operations completes in the background.

This is exactly what is going on with asynchronism. There are functions operating in the background (in the browser to be accurate) at the same time as functions operating in the runtime. 

```
const sum = (a, b) => {
	return a + b;
};

const call = (x, y, callback) => {
	return callback(x, y);
};

console.log(call(2, 3, sum));
```

There is a function `call()` that receives as one of its arguments a function named `callback()` . Notice that at time time of executing `call`, the function `callback` does not require parenthesis, because it is an argument. If the parenthesis were added, then it would be executed and that is not what we want, we just simply want to pass it as an argument. 