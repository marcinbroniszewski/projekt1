const burgerBtn = document.querySelector('.burger-btn')
const navMenu = document.querySelector('.nav-items')

const activeBurger = () => {
navMenu.classList.toggle('burger-active')
}

burgerBtn.addEventListener('click', activeBurger)