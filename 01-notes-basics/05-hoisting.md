# Hoisting

Hoisting is a behavior in which variables can be declared after they are executed. This only occurs for older version from ECMAScript5, but from then it has been deprecated, because it only happens with `var` scope and declarative  functions. 

But if you are using ECMAScript5 or older versions we can still avoid hoisting, let's see how. 

    var name;   //Declaration
    name = "Theodore";   //Initialization

    console.log(name);

A hoisting scenario would look like this:

    console.log(name);

    var name = "Theodore";

Here we are calling a varible before declaring an intializing it. The browser engines will interpret the first code as if they needed to store in memory a new variable, in this case `name` . Up to this point the variable has not been declared, hence it will have a type of `undefined` and that is what will be printed.

Hoisting can also happen with functions, particulary with declarative ones. 

    greet();

    function greet(){
        console.log("Hello " + name);
    };

    var name = "Theodore";
