function result(user, cpu){

    if(user === cpu){

        return `User: ${user}
Cpu: ${cpu}\n
It's a tie!`
    }


    else if (user != cpu){

        if(user === "paper" && cpu === "rock"){
            return `User: ${user}
Cpu: ${cpu}\n
User wins!`
        }

        else if(user === "rock" && cpu === "paper"){
            return `User: ${user}
Cpu: ${cpu}\n
Cpu wins!`

        }

        else if(user === "paper" && cpu === "scissors"){
            return `User: ${user}
Cpu: ${cpu}\n
Cpu wins!`

        }

        else if(user === "scissors" && cpu === "paper"){
            return `User: ${user}
Cpu: ${cpu}\n
User wins!`

        }

        else if(user === "scissors" && cpu === "rock"){
            return `User: ${user}
Cpu: ${cpu}\n
Cpu wins!`

        }

        else if(user === "rock" && cpu === "scissors"){
            return `User: ${user}
Cpu: ${cpu}\n
User wins!`

        }

    }


}


r = result("scissors","paper");
console.log(r);