'use strict';

const toggler = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header-asidebar__right-menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('header__menu-icon--active');
  menu.classList.toggle('header-asidebar__right-menu--active');
});
