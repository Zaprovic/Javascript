# Loops

This is a fast and "efficient" way to perfom ciclic tasks. Loops are usually constrained to some conditional statements in order to be executed; or if we have an array, it is subjected to the size of it. 

### `for` loops
The `for` loop basic syntax is as follows:

    // To traverse all items in an array

    var myList = [1,2,3,"hello",true];

    for(var i = 0; i < myList.length, i++){
        console.log(myList[i])
        
    }

This option is great if we want to have total control about the items of an array, so it will allow to return either all of the items, or just a slice of them


    for(var item of myList){
        console.log(item)

    }

This is an easier option but here we will alwasys retrieve every item in the array. 

### `while` loops

The syntax here is

    var myList = [1,2,3,"hello",true];
    var i = 0;

    while(i < myList.length){
        console.log(myList[i])  
        i++;
    }

What is going here is that while loop is being executed when a condition is valid, the condition is that the variable `i` is always less than the total length of the array `myList`, whenever this happens then we will print the element of `myList` in the `i` position, and then update `i` by incrementing it. 

