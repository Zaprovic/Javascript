const h1 = document.querySelector('h1')
const thirty = document.querySelector('#thirty-lines');
const twenty = document.querySelector('.twenty-lines');
const p = document.querySelector('p');
const input = document.querySelector("input")

console.log({
    h1,
    p,
    twenty,
    thirty,
    input

});

const img = document.createElement('img');
img.setAttribute("src","https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d0/latest/20150621180604/Lucario.png/1200px-Lucario.png")

p.append(img)

console.log(img)




