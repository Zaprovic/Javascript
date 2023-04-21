# Scope

We already said that in JS variables are declared with something known as *scope*. It is basically, as the word suggest, the scope that variables can reach inside a block of code. 

## Global and local scope

    var name = "John";   // This variable has global scope 

    function greeting(){
        var lastName = "Wick";   // This variable has local scope

        return `Hello ${name} {lastName}`;
    };

Notice that a local scope is contained within a block of code inside a script, like a function for example. Something to keep in mind is that every variable declared in a global scope is accessible in every local scope, but the opposite is not true. 




