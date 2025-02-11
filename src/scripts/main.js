'use strict';

const button = document.querySelector('.header__menu-open');
const menu = document.querySelector('.menu');
const buttonClose = document.querySelector('.menu__menu-close');
const menuLogo = document.querySelector('.menu__logo');
const navLinks = document.querySelectorAll('.nav-list__link');
const html = document.documentElement;

const closeMenu = () => {
  menu.classList.remove('menu--open');
  html.classList.remove('page__no-scroll');
};

button.addEventListener('click', () => {
  menu.classList.add('menu--open');
  html.classList.add('page__no-scroll');
});

buttonClose.addEventListener('click', closeMenu);
menuLogo.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
