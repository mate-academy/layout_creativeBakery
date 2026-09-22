'use strict';

const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const openButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.menu__close');
const pageParts = document.querySelectorAll('.header, .page__main, .footer');
// same value as the desktop() mixin
const desktopQuery = window.matchMedia('(min-width: 1024px)');

const isMenuOpen = () => menu.classList.contains('menu--open');

const setMenu = (isOpen, returnFocus = true) => {
  menu.classList.toggle('menu--open', isOpen);
  page.classList.toggle('page--locked', isOpen);
  openButton.setAttribute('aria-expanded', String(isOpen));

  // while the menu is open, the rest of the page can't be focused or clicked
  pageParts.forEach((part) => {
    part.inert = isOpen;
  });

  if (isOpen) {
    closeButton.focus();
  } else if (returnFocus) {
    openButton.focus();
  }
};

if (page && menu && openButton && closeButton) {
  openButton.addEventListener('click', () => setMenu(true));
  closeButton.addEventListener('click', () => setMenu(false));

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenu(false, false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      setMenu(false);
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches && isMenuOpen()) {
      setMenu(false, false);
    }
  });
}
