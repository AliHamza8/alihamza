const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavItem = document.querySelector('.nav-item-mob')

mobileNav.classList.add('hidden')
hamburger.addEventListener('click', () => {
    if(mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove("hidden")
    } else {
        mobileNav.classList.add('hidden')
    }
})