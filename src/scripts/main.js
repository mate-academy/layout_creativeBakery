'use strict';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('mobile-menu--open');
  burger.classList.toggle('burger--open');
});
