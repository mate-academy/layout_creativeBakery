'use strict';

const burger = document.querySelector('.burger');
const side = document.querySelector('.side-mobile');

burger.addEventListener('click', () => {
  side.classList.toggle('side-mobile--active');
});
