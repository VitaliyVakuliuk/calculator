const display = document.querySelector('#container input[name=display]');

document.querySelectorAll('.button, .zero')
    .forEach( btn => btn.addEventListener('click', digitOperPressed) );

function digitOperPressed(e) {
   display.value += e.target.innerText;
}
document.querySelector('.bigbutton')
    .addEventListener('click', function(){
        display.value = eval(display.value);       
})
document.querySelector('#clear')
.addEventListener('click', function () {
    display.value = ('');
});
document.querySelector('.del')
.addEventListener('click', function () {
    display.value = display.value.substring(0, display.value.length - 1) ;
});
