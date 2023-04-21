# Conditional statements

Conditionals are used to combine operators in a single statement, in order to control when to perform a given action.

The basic structure of a conditional statement is

    if (a) {

        // These will be executed only when a evaluates to true
        
    }

    else if (b) {

        // These will be executed only when b evaluates to true
    }

    else{
        //  Will be executed in any other case
    }


## Ternary operator

This is a way to evalue an if-else statement in a single line

    condition ? true : false;

This is the same as asking if `condition` is true. If it is, then 
it will perform anything in the `true` side, otherwise it will perform what is in `false`

    var number 1;
    var ans = number === 1 ? "This is the number one" : " This is not number one";

## Switch statements
This is another way to generate a condition by cases, so it is useful when we are dealing with many else-if 

The basic syntax is

    switch(expression){

        case val1:
            // Executes if expression evaluates to val1
            break;

        case val2:
            // Executes if expression evaluates to val2
            break;

        case val3:
            // Executes if expression evaluates to val3
            break;

                            .
                            .
                            .
                            .

        default:
            // If expression does not evaluate to any of the above

    }

