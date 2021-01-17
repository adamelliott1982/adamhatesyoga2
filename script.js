//////////////////////////////////////// NAV ANIMATIONS
const circle = document.querySelector('.circle');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

circle.addEventListener('click', ()=>{
    circle.classList.toggle('active');
    main.classList.toggle('active');
    nav.classList.toggle('active')
    
})



////////////////////////////////////////// ABOUT PAGE
const boxes = document.querySelectorAll('.box')
const triggerBox = window.innerHeight / 10 * 9


window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerBox) {
            box.classList.add('revealed')
        } else {
            box.classList.remove('revealed')
        }
    })
}











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
    formText.classList.add('revealed')
    submitButton.classList.add('revealed')
})
