const a = [1,1,[2,3,[4,4,5,6]],4,[1,3,5,6,[1,2,4]]];

console.log(a.flat())
console.log(a.flat(2))
console.log(a.flat(Infinity))