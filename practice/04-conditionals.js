function solution(article){

    // if(article === "computadora"){
    //     return "Con mi computadora puedo programar usando JavaScript"

    // }

    // else if(article === "celular"){
    //     return "En mi celular puedo aprender usando la app de Platzi"

    // }

    // else if(article === "cable"){
    //     return "¡Hay un cable en mi bota!"

    // }

    // else{
    //     return "Artículo no encontrado"
    // }

    switch(article){

        case "computadora":
            return "Con mi computadora puedo programar usando JavaScript";
        
        case "cable":
            return "¡Hay un cable en mi bota!";

        case "celular":
            return "En mi celular puedo aprender usando la app de Platzi"

        default:
            return "Artículo no encontrado"


    }



}

r = solution("computadora");
console.log(r);