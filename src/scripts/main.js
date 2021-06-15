'use strict';

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('header__menu-button--active');
  menu.classList.toggle('menu--active');
});
