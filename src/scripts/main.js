'use strict';

function doHeaderMenu() {
  const menu = document.querySelector('.page__menu');
  const menuButton = document.querySelector('.header__button');
  const pageBody = document.querySelector('.page__body');

  function menuToggler() {
    menu.classList.toggle('page__menu--active');
    menuButton.classList.toggle('header__button--active');
    pageBody.classList.toggle('page__body--stop-scroll');
  };

  menuButton.addEventListener('click', menuToggler);

  menu.addEventListener('click', e => {
    if (document.querySelector('.page__menu--active')) {
      if (e.target.closest('.menu__list-item')) {
        menuToggler();
      }
    }
  });
}

doHeaderMenu();
