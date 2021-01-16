const circle = document.querySelector('.circle');
const main = document.querySelector('main');
const imageBoxes = document.querySelectorAll('.image-box');


circle.addEventListener('click', ()=>{
    circle.classList.toggle('nav-open');
    main.classList.toggle('nav-open');
})

