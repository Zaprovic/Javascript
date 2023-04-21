const h1 = document.querySelector("h1");
const v1 = document.querySelector("#calc-one");
const v2 = document.querySelector("#calc-two");
const btn = document.querySelector("#btn-calculate");
const out = document.querySelector(".outcome");

btn.setAttribute("onclick","btnOnClick()")

function btnOnClick(){
    const sum = Number(v1.value) + Number(v2.value);
    out.innerText = sum;

    
}

console.log(emts)




emts = {
    h1,v1,v2,btn,out
};

