let body = document.querySelector('body');
let click = document.querySelector('.click');
let reset = document.querySelector('.reset');
let count = 0;

let one
let color = []


click.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    click.innerHTML = count;
})
reset.addEventListener('click', (e) => {
    e.preventDefault();
    count = 0 
    body.style.background = 'black'
    click.innerHTML = count + " click" ;

})
