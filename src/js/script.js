const container = document.querySelector('.forkapp')
let menuBtn = document.querySelector('.forkapp__header--nav__btn')
let menuContent = document.querySelector('.forkapp__header--nav__ul')


container.addEventListener('click',  (event) => {
    let cursorTarget = event.target
    menuContent.classList.toggle('nav_ul__opened')
    menuBtn.classList.toggle('nav-btn__active')
    if (cursorTarget !== menuBtn || menuContent){
        menuContent.classList.remove('nav_ul--opened')
    }
})