# Generators: Iterating the clever way

Generators provide a way to create iterators in a more memory safer way. When we use an array, what is gonna happen is that all of its values will get stored in memory, whereas a generator will store each of its elements one by one, as they get requested.

They also provide for a better manipulation of its elements. In an array the order of the items is fixed, each of them will have an index associated. With generators the control over iterations is completely custom and the user can choose to iterate over a subset of the values, or even be able to early stop the iteration process. 

As an example consider the following implementation

```
const numbers = [1, 2, 3, 4, 5];

for (i of numbers) {
	console.log(i);
}

```

This is just an array with five elements, and there is a for loop that iterates along the entire list to print every element in the console. The body of the loop is executed once for each element `i` of the array. 

Now consider this

```
const gen = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};
```

This is the basic structure of a generator. It can be declared as an anonymous function using the `*` symbol after the keyword `function` , and to specifiy the elements inside the iterator the keyword `yield` is used for each item. 

When a generator gets created, we can use it kind of like to create instances. In this case we have a generator named `gen` and we can create these iterator instances as follows:

```
const gen1 = gen();
```

These iterator instances are of type `object` and come with three main methods: `next()` , `return()` and `throw()` . The method `next()` is the most notorious one, because it is the one that will allow the iterator to traverse its elements.

By doing `gen1.next()` it will return an object with an attribute of `value` that specifies the value of the element in the iterator, and `done` is a boolean that checks whether the iterator has completed the item travsersal or not. 

The generator that was created as an example contains five elements, so the output for `gen1.next()` will be:

```
console.log(gen1.next())  //{value: 1, done: false}
console.log(gen1.next())  //{value: 2, done: false}
console.log(gen1.next())  //{value: 3, done: false}
console.log(gen1.next())  //{value: 4, done: false}
console.log(gen1.next())  //{value: 5, done: false}
console.log(gen1.next())  //{value: undefined, done: true}
```
By doing one more time `console.log(gen1.next())` after the element with `value : 5` it will return `{value: undefined, done: true}` , where the `true` indicates that the generator has completed to iterate over its elements. 

Something to keep in mind is that if the `.next()` method of an instance of class Generator returns `done : true` ,  then `value : undefined` . But the opposite its not true, because a generator can yield an empty value, something like this for example


```
const gen = function* () {
	yield 1;
	yield;
	yield 3;
	yield 4;
	yield 5;
};

```

If we do the same code as before, we wil get as one of the outputs `{value: undefined, done: false}` as soon as it reaches the value after `1` , because there is an empty `yield` statement, however `done : false` because the generator has not finished to iterate over its elements. 




