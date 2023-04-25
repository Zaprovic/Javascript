//OG
function newUSer(name, age, country) {
	var name = name || "default-name";
	var age = age || "default-age";
	var country = country || "default-country";
	console.log(name, age, country);
}

newUSer();
newUSer("Brandon", "Eich", "US");

//ES6
const userIn = (
	name = "default-name",
	age = "default-age",
	country = "default-country"
) => {
	console.log(name, age, country);
};

userIn();
userIn("Bjarne", "Strostroup", "DE");
