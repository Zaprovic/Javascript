# Objects

In JavaScript, objects are fundamental, understanding how objects works makes easier to also understand the language.

An object in real life is an element that has different features. So for example a car is an object, and its attributes or features are the tires, color, brand, year, among others

To define an object in JavaScript we declare and initalize a variable as a key-value pair:

    var car = {
        brand : "Audi",
        model: "Q7",
        year : 2021,
        color: "green"
    };

Objects are extremely versatile and powerful, they can even store functions and objects inside them


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

        power : function(att){
            return `Escavalier has attacked with ${att}`
        },

        info : function(){

            return `Name: ${this.name} | Generation: ${this.generation} | Stats: [${this.stats.attack},${this.stats.defense},${this.stats.spAttack},${this.stats.spDefense},${this.stats.speed}]` 

        }

    }


Object manipulation is very well relating to object oriented programming, so there are some concepts that we must recall, such as the `this` keyword. Recall that we use it when we want to refer the object itself. 

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

