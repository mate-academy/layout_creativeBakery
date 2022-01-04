'use strict';

const page = document.querySelector('.page');
const menu = document.querySelector('.menu__list-container');
const toggler = document.querySelector('.menu__togler');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu__list-container--open');
  page.classList.toggle('page--with-modal');
});
