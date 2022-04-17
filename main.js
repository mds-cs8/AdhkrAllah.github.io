let body = document.querySelector('body');
let click = document.querySelector('.click');
let reset = document.querySelector('.reset');
let count = 0;

let one
let color = []


click.addEventListener('click', (e) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    count++;
    click.innerHTML = count;
    body.style.background = "#"+ randomColor;
})
reset.addEventListener('click', (e) => {
    e.preventDefault();
    count = 0 
    body.style.background = 'black'
    click.innerHTML = count + " click" ;

})