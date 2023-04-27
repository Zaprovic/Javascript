const obj = [
	{ pokeID: 1, pokeName: "Escavalier", types: ["Bug", "Steel"] },
	{ pokeID: 2, pokeName: "Mimikyu", types: ["Ghost", "Fairy"] },
	{ pokeID: 3, pokeName: "Hydreigon", types: ["Dragon", "Dark"] },
	{ pokeID: 4, pokeName: "Swampert", types: ["Water", "Ground"] },
];

const names = obj.flatMap((names) => {
    return names.types
})

console.log(names);

