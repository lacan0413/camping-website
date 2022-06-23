let aside = document.querySelector('#aside');

let cross = document.querySelector('#cross');
let bger = document.getElementById('bger');

cross.addEventListener('click', (e) => {
    aside.classList.toggle('aside__menu-close')
});

bger.addEventListener('click', (e) => {
    aside.classList.toggle('aside__menu-close')
});