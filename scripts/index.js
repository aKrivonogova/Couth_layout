const burgerMenuContent = document.querySelector('.header__content');
const burgerButton = document.querySelector('.header__burger');
const body = document.querySelector('body');
// клик по кнопке меню 
burgerButton.addEventListener('click', () => {
    burgerMenuContent.classList.toggle('header__menu-active');
    burgerButton.classList.toggle('is-active');
})

// клик по пустому пространству 
body.addEventListener('click', (event) => {
    const currentMenuBlock = event.composedPath().includes(burgerMenuContent);
    const burgerMenuBlock = event.composedPath().includes(burgerButton);

    if (!currentMenuBlock && !burgerMenuBlock) {
        burgerButton.classList.remove('is-active');
        burgerMenuContent.classList.remove('header__menu-active');
    }
})