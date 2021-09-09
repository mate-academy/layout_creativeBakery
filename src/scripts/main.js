'use strict';

const openButton = document.querySelector('.header__nav-btn');
const closeButton = document.querySelector('.top-menu__btn');
const menuOpened = document.querySelector('.top-menu');


openButton.addEventListener('click', () => {
  menuOpened.classList.add('top-menu--opened');
});

closeButton.addEventListener('click', () => {
  menuOpened.classList.remove('top-menu--opened');
});


const switchOne = document.querySelector('.switch__number--1');
const headerWrapper = document.querySelector('.header__wrapper');

switchOne.addEventListener('click', () => {
  switchOne.classList.add('switch__number--active');
//   headerWrapper.style.backgroundImage = "url(../images/header-bg-2.jpg)";
});

