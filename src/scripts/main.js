'use strict';

function doHeaderMenu() {
  const menu = document.querySelector('.header__menu');
  const menuBtn = document.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__menu--active');
    menuBtn.classList.toggle('header__menu-btn--active');
  });
}

function startApp() {
  doHeaderMenu();
}

startApp();
