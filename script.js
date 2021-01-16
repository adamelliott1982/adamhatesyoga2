





//////////////////////////////////////// NAV ANIMATIONS
const circle = document.querySelector('.circle');
const main = document.querySelector('main');

circle.addEventListener('click', ()=>{
    circle.classList.toggle('nav-open');
    main.classList.toggle('nav-open');
})





//////////////////////////////////////// GALLERY PAGE
const imageBoxes = document.querySelectorAll('.image-box');
const imageNum = document.getElementById('image-num')

imageBoxes.forEach((imageBox) => {
    imageBox.addEventListener('click', ()=>{
        removeActiveClasses()
        imageBox.classList.add('active')
    })
})


function removeActiveClasses(){
    imageBoxes.forEach(imageBox => {
        imageBox.classList.remove('active')
    });
}



//////////////////////////////////////// CONTACT US PAGE
const questionButton = document.getElementById('question-button')
const submitButton = document.getElementById('submit-button')
const formText = document.getElementById('form-text-area')

questionButton.addEventListener('click', ()=>{
    formText.classList.add('active')
    submitButton.classList.add('active')
})
