'use strict';

const burger = document.querySelector('.nav-header__burger');
const callbackTop = document.querySelector('.callback__top');
const callback = document.querySelector('.callback');
const burgerLine = document.querySelector('.nav-header__burger-line');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  callbackTop.classList.toggle('callback__top--active');
  callback.classList.toggle('callback--active');
  burger.classList.toggle('nav-header__burger--active');
  burgerLine.classList.toggle('nav-header__burger-line--active');
});
