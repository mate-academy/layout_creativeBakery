'use strict';

const burger = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__menu--active');
    nav.classList.toggle('header__nav--active');
  });
}
