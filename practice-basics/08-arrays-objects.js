var a = [
    {name : "bike", cost: 3000},
    {name : "tv", cost: 2500},
    {name : "book", cost: 320},
    {name : "cell phone", cost: 10000},
    {name : "laptop", cost: 20000},
    {name : "headphones", cost: 1700},
    {name : "keyboard", cost: 500},
];

var article = a.filter(function(art){
    return art.cost <= 500

});

var names = a.map(function(art){
    return art.name;

});

var found = a.find(function(art){
    return art.name === "laptop";
});

var cheap = a.some(function(art){
    return art.cost >= 70000;
})


// console.log(article);
// console.log(names);
// console.log(found);
console.log(cheap);

// a.forEach(function(art){
//     console.log(art.name)

// });


    




