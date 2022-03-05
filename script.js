const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.collapse');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {

    if(hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        navbar.classList.remove('open');

    } else {
        hamburger.classList.add('open');
        navMenu.classList.add('open');
        navbar.classList.add('open');
    }
}

// date
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();