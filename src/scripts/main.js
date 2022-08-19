'use strict';

const menuBtn = document.querySelector('.nav__mobile-btn-link');
const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu__x');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  menu.classList.remove('hide-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hide-menu');
  menu.classList.remove('show-menu');
});
