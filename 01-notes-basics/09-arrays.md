# Arrays

This is an ordered data structure, also known as *list* in which we can store variables of different dataypes. 

    var a = [1,2,3,"Hello",true];   

In order to access the elements of an arary we use **index notation**, which starts counting from 0 to retrieve the value in specified position

    console.log(a[0]);   // Returns 1
    console.log(a[3]);   // Returns "Hello

Arrays have some built in methods in order to acces useful information about them

- `a.length` will return the lenght of the array
  
- `a.push("element")` will add element `"element"` at the end of the array
- `a.pop()` eliminates the current last element of the array
- `a.unshift("item")` will add element `"item"` at the beginning of the array
- `a.shift()` eliminates the current first element of the array
- `a.indexOf("item")` wil return the index position of `"item"`