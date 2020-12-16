const container = document.querySelector('.forkapp');
let menuBtn = document.querySelector('.forkapp__header--nav__btn');
let menuContent = document.querySelector('.forkapp__header--nav__ul');


container.addEventListener('click',  (event) => {
    let cursorTarget = event.target;

    if (cursorTarget.classList.contains('forkapp__header--nav__btn') || cursorTarget.classList.contains('forkapp__header--nav__btn--line')) {
        menuContent.classList.toggle('nav_ul__opened')
        menuBtn.classList.toggle('nav-btn__active')
        console.log(cursorTarget);
    }
    if (!cursorTarget.classList.contains('forkapp__header--nav__ul--item') && !cursorTarget.classList.contains('forkapp__header--nav__ul--link') && !cursorTarget.classList.contains('forkapp__header--nav__btn--line') && !cursorTarget.classList.contains('forkapp__header--nav__btn')){
        menuContent.classList.remove('nav_ul__opened')
        menuBtn.classList.remove('nav-btn__active')
        console.log(cursorTarget);
    }
})