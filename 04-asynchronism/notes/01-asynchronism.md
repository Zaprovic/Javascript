# Asynchronism: What is it

Programming languages have always been *synchronous* by default. This mean they execute tasks in a queue, one by one, and will block every other execution until one task is finished. 

JavaScript is not the exception. It is a single threaded and non blocking programming language. It has a runtime enviroment with a call stack, heap, event loop, callback queue and web APIs.

Let's take a look at an example to clear all of this up. Suppose you are in a restaurant with your friends, and you want to order some food. After revising the menu you decide you want to get yourselves four tacos and a hamburguer

```
console.log("First taco");
console.log("Second taco");
console.log("Third taco");
```
So three of your friends decided to ordered tacos, one of them a hamburguer and finally you decided you also wanted a taco. If the tacos were already prepared, it is obvious you will get inmediately. But let's say the hamburguer was not ready yet, then it will take a couple of minutes to be in your table.

```
setTimeout(() => {
    console.log("Hamburguer ready")
    
}, 3000);

console.log("Fourth taco");

```

There is a function in JavaScript named `setTimeout()` which is asynchronous by default. It will take as parameter a *callback function* that will be executed after a specified amount of miliseconds. The code before is stating that it will print the message `Hamburger ready` after 3000 miliseconds, which is 3 seconds. 

Now the whole order will look like this, in the same order as you and your friends asked it. 

```
console.log("Taco 1"); // Mike
console.log("Taco 2"); //Lamar
console.log("Taco 3"); //John

setTimeout(() => {
    console.log("Hamburguer ready") //Erick
    
}, 3000);

console.log("Taco 4"); //You
```

And what is going to happen is that the four tacos will be displayed inmediately in the console, but the hamburguer will appear 3 seconds after. This can be strange at first because your friend Erick ordered the hamburguer before you did with the taco.

The thing is, the hamburguer order had to be sent to the kitchen so it could be prepared, while the tacos did not, therefore it makes sense that the hambuger is the last meal in the table. But as the tacos are being sent to Mike, Lamar, John and you, Erick's hamburger is also being prepared.


This is how asynchronism works in JavaScript, it will execute every task available at the current moment, but there are other tasks that require more time will also be executed in the background. 

The callstack will receive all the tasks that need to be executed (like the orders). If it sees one that cannot be inmediately executed (hence an asynchronous task) it will send it to the *browser's event loop*. Here there is another stack called *callback queue* that will store all of the asynchronous tasks that are completed. 

The event loop checks if all the tasks in the callback queue are completed, once they are finished, it sends them back to the callstack and the code execution finishes. 

However if we consider for example the `setTimeout()` method, even tough we put 0 miliseconds as an argument, it will still behave asynchronously. This is because JavaScript can detects what is an asynchronous function what isn't, and the browser will still be in charge to work with the asynchronous one. 

## Event loop
As said before, the event loop is a checker that revises whether the callback queue is finished or not. 


<center>

![](./../imgs/async.png)

</center>

In the JavaScript runtime we will have two main containers: **Memory Heap** and the **Call Stack**. The memory heap is where all the functions and variables are stored, and the call stack is the same but for the tasks that give interaction to the browser. Both heap and call stack are included in any runtime enviroment of JavaScript. This includes the V8 engine, the one that Chrome works with. 

One thing to keep in mind is that there is a single call stack in a JavaScript runtime enviroment, so pieces of code can only be executed line by line, so here is it impossible tu run asynchronous tasks without blockin the stack.

But browser is more than just the runtime itself. It also has something known as **web APIs**.

When the stack is storing each task and execute them one by one, it will also check if there is any that is not native of the runtime. These are instead, provided by web APIs and are always asynchronous. So here all of these tasks will be stored, and as every task gets finished, they go to the **callback queue**

Here the event loop is in charge to compare the call stack and callback queue. It will check *if the stack is empty* and then create an event to push the tasks from the callback queue back back there to the callstack. 






