# Coercion

Javascript is a weakly typed language, which means that we are able to perform logical operations with variables of different dataype. Coercion is the way we can change this types from one to another. 

- **Implicit coercion:** The language performs the change of data type

- **Explicit coercion:** When we force a variable to change type. 

        // Implicit coercion
        var a = 4 + "7";;
        typeof a   // string


        // Explicit coercion
        var b = 20;
        var c = b + ""
        typeof c   // string

        var d = String(b);


## Trusty and falsy
This is how we know what is the truth default value of some variables, by using the built in function `Boolean()`

#### Default false values
- `Boolean(0) == false`
- `Boolean(null) == false`
- `Boolean(NaN) == false`
- `Boolean(undefined) == false`
- `Boolean("") == false`
- `Boolean(false) == false`

#### Default true values
- `Boolean("a") == true`
- `Boolean(1) == true`
- `Boolean([]) == true`
- `Boolean({}) == true`
- `Boolean(function(){}) == true`
- `Boolean(true) == true`