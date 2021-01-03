const hamburger = document.querySelector('.click');
const navMenu = document.querySelector('.navLinks');
const navLinks = document.querySelectorAll('.navbar a');
const h1 = document.querySelector('.content'); 

allEventListners();

function allEventListners() {
  hamburger.addEventListener('click', togglerClick);
}

function togglerClick() {
  hamburger.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  h1.classList.toggle('h1-nav-open'); 
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}