'use strict';

const menuBtn = document.querySelector('.nav__mobile-btn-link');
const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu__x');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  menu.classList.remove('hide-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  menu.classList.add('hide-menu');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    menu.classList.remove('show-menu');
  }
});
