# Methods for arrays with objects

It is very common to have arrays that are storing objects, and there are some useful methods to keep in mind when manipulating these.

    var a = [
        {name : "bike", cost: 3000},
        {name : "tv", cost: 2500},
        {name : "cell phone", cost: 10000},
        {name : "laptop", cost: 20000},
        {name : "headphones", cost: 1700},
    ];

---

- `a.filter(function)` receives a function as an argument, and will return a new array with the objects that satisfy the given function

    For example, if we do the following

        var article = a.filter(function(art){
            return art.cost <= 500

        });

    The variable `article` will store any object whose cost is less than or equal to 500. The function inside `filter()` receives an argument of `art`, that is representing the object inside the array `a` that we want to retrieve the cost from. 

---

- `a.map(function)` receives a function as an argument, and will return in a new array the mapping of what is being executed inside the function. 
  
    For example, if we want to retrieve only the `name` of the objects we can do the following:

        var names = a.map(function(art){
            return art.name

        });

---

- `a.find(function)` will return a new array with the whole object information that satifies the `function` argument. 

    For example, if we want to find the object information whose name is `laptop` we can do the following: 

        var found = a.find(function(art){
            return art.name === "laptop";
        });

    This methods works very similar to `filter()`. The big difference between the two is that `find()` only returns the very first element that satifies the function, whereas `filter()` returns all the objects. 

---

- `a.forEach(function)` is a shorthand for a traditional `for` loop to retrieve the elements of an array. It receives a function that will specify which attribute of the object we want to return 

        a.forEach(function(art){
            console.log(art.name)

        });

--- 

- `a.some(function)` it will return a boolean value, making a validation specified by `function`

    For example if we want to know if there are objects in our array that cost less than 700, we can do the following:
    
        var cheap = a.some(function(art){
            return art.cost >= 70000;
        });

---




