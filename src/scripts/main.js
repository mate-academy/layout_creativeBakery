'use strict';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.page__mobile-menu');

burger.addEventListener('click', (e) => {
  e.target.classList.toggle('burger--close');
  mobileMenu.classList.toggle('page__mobile-menu--active');
})
