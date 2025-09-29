'use strict';

const burgerMenu = document.querySelector('.header__burger_menu');
const navMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu--active');
  burgerMenu.classList.toggle('header__burger_menu--active');
  body.classList.toggle('menu_open');
});
