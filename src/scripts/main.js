'use strict';

const menuOpener = document.querySelector('.header__menu-opener');
const menu = document.querySelector('.menu');
const menuCross = document.querySelector('.menu__cross');
const menuLinks = document.querySelectorAll('.menu__link');

const closeMenu = () => {
  menu.classList.remove('menu--show');
  document.body.classList.remove('page__body--with-menu');
};

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--show');
  document.body.classList.add('page__body--with-menu');
});

menuCross.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
