'use strict';

const burger = document.querySelector('.header__btn');
const burgerMenue = document.querySelector('.burger__menue');

burger.addEventListener('click', () => {
  if (burgerMenue.classList.contains('burger__menue--active')) {
    burgerMenue.classList.remove('burger__menue--active');
    burger.classList.remove('active');
  } else {
    burgerMenue.classList.add('burger__menue--active');
    burger.classList.add('active');
  }
});
