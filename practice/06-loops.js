function solution(estudiantes, deathCount, nuevo){
    if(deathCount == 0){
        estudiantes.push(nuevo);
        return estudiantes;
    }

    else if(deathCount > 0){

        while(deathCount > 0){
            estudiantes.pop()
            deathCount--;
        }

        estudiantes.push(nuevo);
        return estudiantes

    }


}

r = solution(["Juan","Juanita","Daniela"],2,"Santi");
console.log(r);