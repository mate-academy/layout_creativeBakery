'use strict';

const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const menuLinks = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
  const isMenuOpen = menu.classList.contains('menu-active');

  menu.classList.toggle('menu-active');
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
};

menuLinks.forEach((link, index) => {
  link.style.setProperty('--index', index);
});

if (menuToggle) {
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('menu-active')) {
      toggleMenu();
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu-active')) {
    toggleMenu();
  }
});
