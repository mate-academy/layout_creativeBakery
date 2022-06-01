'use strict';

function doHeaderMenu() {
  const menu = document.querySelector('.page__menu');
  const btnMenu = document.querySelector('.btn-menu');
  const pageBody = document.querySelector('.page__body');

  function menuToggler() {
    menu.classList.toggle('page__menu--active');
    btnMenu.classList.toggle('btn-menu--active');
    pageBody.classList.toggle('page__body--stop-scroll');
  };

  btnMenu.addEventListener('click', menuToggler);

  menu.addEventListener('click', e => {
    if (document.querySelector('.page__menu--active')) {
      if (e.target.closest('.menu__list-item')) {
        menuToggler();
      }
    }
  });
}

doHeaderMenu();
