function solution(arraySecreto){

    // if(typeof arraySecreto[0] === "string"){
    //     return true;
    // }

    // else{
    //     return false;
    // }

    return typeof arraySecreto[0] === "string"? true : false;

    // condition ? true : false;
}

r = solution(["1",2,3,4,5]);
console.log(r);