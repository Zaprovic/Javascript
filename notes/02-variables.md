# Variables in JavaScript
Declaring variables using JavaScript is somewhat unique and different with respect to other common languages such as Python, in which we do not need any type of declaration, or even Java, or C, where we must specify explicitly the dataype before declaration.

JavaScript works kind of like a combination among these two principles, but with some different and new concept: **scope**. 

- `var`
- `let`
- `const`

Variables in JS have two states: a declaration and initialization.  

    // This is a declaration
    var age;

    // This is an initialization
    age = 20;

When declaring a variable, its default type will be `undefined` . It makes sense, since declarations do not assign any dataype to a variable. 