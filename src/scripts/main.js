'use strict';

// Burger menu
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const links = document.querySelectorAll('.header__link');
const desktopQuery = window.matchMedia('(min-width: 1024px)');

function setMenu(isOpen) {
  header.classList.toggle('header--open', isOpen);
  document.body.classList.toggle('page--lock', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

burger.addEventListener('click', () => {
  setMenu(!header.classList.contains('header--open'));
});

links.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
  }
});



