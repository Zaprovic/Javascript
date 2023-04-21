# Objects in JavaScript

Hello everyone, in this file I will be explaining how we can create objects with JavaScript. Objects are one of the most fundamental building block of this language, and they play a huge role in more advanced topics in web development.

An object can be defined as a storing of key-value pairs. This might sound suspiciously similar to something like Python dictionaries but objects are way more powerful and flexible, since they can store any type of variable we want, and even functions and objects themselves. 

Something else to keep in mind is that these work with some object oriented programming principles, so knowing the basics about the topic will help you out in better understanding their behavior. 

The basic syntax to create an object is 

```
let myObject = {
    feature1 : feature1Name,
    feature2 : feature2Name,
    feature3 : feature3Name,
    feature4 : feature3Name,
}
```

As said before, objects are collections of key-value pairs, where the keys represent the features and the values their corresponding feature name. 

## Accesing to the features of an object

In order to access to the features of an object we use the syntax `myObject.feature`. Recall that we could also store functions as keys, so in that case we will do something like `myObject.featureFunction()`

### Example
Let's say we want to create a Pokemon with the following features

- name
- generation
- stats
- information
  
Where stats is an object containing the values of attack, defense, special attack, special defense and speed; and information is a function that displays all the features of the pokemon as a string. Here is how we would do it


```
var pokemon = {

    name : "Escavalier",

    generation : 5,

    stats : {
        attack : 250,
        defense : 210,
        spAttack : 98,
        spDefense : 105,
        speed : 80
    },

    info : function(){

        return `Name: ${this.name} | Generation: ${this.generation} | Stats: [${this.stats.attack},${this.stats.defense},${this.stats.spAttack},${this.stats.spDefense},${this.stats.speed}]` 

    }

}
```

Notice that here we are using the keyword `this`, which refers to the object itself that we are declaring and initializing. Here is where some basic knowledge of OOP makes it easier to understand objects. 


## Constructor functions 
When we have a lot of variables that we want to convert to objects, it is very tedious to perform this task manually. Constructors allow us to do this in a fast and easy way. 

    function car(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;

    }

What is being done here is using they keyword `this` to assign every of the parameters of the function, to an object property with the same value.

This is almost the exact same way we create object of specific type in object oriented programming. We can create instances of that object my using the keyword `new`

    var myCar = new car("Audi","Q7",2021);

So far we have created an object of "class" `car`, notice that we didn't have to set manually the instance in any time of the code. Just by using `new` and the previous existing object was enough. This way we can create as many cars as we want. 


