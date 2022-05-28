'use strict';

function doHeaderMenu() {
  const menu = document.querySelector('.header__menu');
  const menuBtn = document.querySelector('.header__menu-btn');
  const pageBody = document.querySelector('.page__body');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__menu--active');
    menuBtn.classList.toggle('header__menu-btn--active');
    pageBody.classList.toggle('page__body--stop-scroll');
  });
}

function startApp() {
  doHeaderMenu();
}

startApp();
