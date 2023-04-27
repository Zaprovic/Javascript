const str = "The quick brown fox jumps over the lazy dog";
const regex = /\w+/g;

const matches = str.matchAll(regex);

for(const match of matches){
    console.log(match[0]);

}
