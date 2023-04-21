# Functions
There are many different ways to declare functions in JavaScript, let's take a look at each ot them.

---
### Function declarations

    function myFunction(a,b) {
        return a+b;
        
    };

    myFunction();

---

### Function expressions (Anonymus functions)

    var myFunction = function (a,b) {

        return a+b;

    };

    myFunction();

---

The main difference between these two functions is how they handle variables. **Hoisting** applies to declarative function while for expression functions does not. This means that using declarative functions we can call the function before it is declared. 



