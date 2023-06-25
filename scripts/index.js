const burgerMenuContent = document.querySelector('.header__content');
const burgerButton = document.querySelector('.header__burger');


function toggleClass(element, className) {
    element.classList.toggle(`${className}`)
}

function closeMenu() {
    burgerMenuContent.classList.remove('header__menu-active');
    burgerButton.classList.remove('is-active');
}

// клик по кнопке меню 
burgerButton.addEventListener('click', () => {
    toggleClass(burgerMenuContent, 'header__menu-active');
    toggleClass(burgerButton, 'is-active')
})


// клик по пустому пространству 
document.addEventListener('mousedown', (event) => {
    const burgerMenu = event.composedPath().includes(burgerMenuContent);
    const burger = event.composedPath().includes(burgerButton);

    if (!burgerMenu && !burger) {
        closeMenu();
    }
})

// клик на кнопку esc

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
})