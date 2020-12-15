let menuBtn = document.querySelector('.forkapp__header--nav__btn')
const menuContent = document.querySelector('.forkapp__header--nav__ul')


menuBtn.addEventListener('click',  (event) => {


    menuContent.classList.toggle('nav_ul__opened')
    menuBtn.classList.toggle('nav-btn__active')

})


// window.addEventListener('click', (event) => {
//     let cursorTarget = event.target;
//     if (cursorTarget !== menuBtn && cursorTarget !== menuContent) {
//         // if (menuContent.classList.contains('nav_ul__opened')){
//         menuContent.classList.remove('nav_ul__opened')
//         menuBtn.classList.remove('nav-btn__active')
//     }
//
// })