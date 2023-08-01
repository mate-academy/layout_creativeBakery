'use strict';

const burger = document.querySelector('.header__btn');
const burgerMenue = document.querySelector('.burger__menue');

burger.addEventListener('click', () => {
  burgerMenue.classList.toggle('burger__menue--active');
  burger.classList.toggle('active');
});
