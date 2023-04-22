const v1 = document.querySelector(".value1");
const v2 = document.querySelector(".value2");
const btn = document.querySelector("button");
const output = document.querySelector(".result");

btn.setAttribute("onclick","btnOnClick()");
btn.addEventListener("click",btnOnClick);

function btnOnClick(){
    const sum = Number(v1.value) + Number(v2.value);
    const subs = Number(v1.value) - Number(v2.value);
    const mul = Number(v1.value) * Number(v2.value);
    const div = Number(v1.value) / Number(v2.value);

    output.innerText = `The sum is: ${sum}
    The substraction is: ${subs}
    The multiplication is: ${mul}
    The division is: ${div}
    `;

};

console.log({btn});

