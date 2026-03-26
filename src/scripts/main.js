'use strict';

const mobileBreakpoint = 1023;
const body = document.body;
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.mobile-menu__close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

function openMenu() {
  body.classList.add('body--menu-open');
  burgerButton?.setAttribute('aria-expanded', 'true');
  mobileMenu?.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  body.classList.remove('body--menu-open');
  burgerButton?.setAttribute('aria-expanded', 'false');
  mobileMenu?.setAttribute('aria-hidden', 'true');
}

burgerButton?.addEventListener('click', openMenu);
closeButton?.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > mobileBreakpoint) {
    closeMenu();
  }
});
