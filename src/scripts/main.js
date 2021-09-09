'use strict';
// 1

const openButton = document.querySelector('.header__nav-btn');
const closeButton = document.querySelector('.top-menu__btn');
const menuOpened = document.querySelector('.top-menu');
const unscrolledPage = document.querySelector('.page');

openButton.addEventListener('click', () => {
  menuOpened.classList.add('top-menu--opened');
  unscrolledPage.classList.add('unscroll');
});

closeButton.addEventListener('click', () => {
  menuOpened.classList.remove('top-menu--opened');
  unscrolledPage.classList.remove('unscroll');
});

// 2
const minusButton = document.querySelector('.bakershops__zoom--minus');
const plusButton = document.querySelector('.bakershops__zoom--plus');
const resizedMap = document.querySelector('.bakershops__image');

let currentScale = 1;

minusButton.addEventListener('click', () => {
  if (currentScale <= 0.2) {
    currentScale = 1;
  }
  currentScale = currentScale - 0.1;
  resizedMap.style.transform = `scale(${currentScale})`;
});

plusButton.addEventListener('click', () => {
  if (currentScale >= 2) {
    currentScale = 1;
  }
  currentScale = currentScale + 0.1;
  resizedMap.style.transform = `scale(${currentScale})`;
});

// const switchOne = document.querySelector('.switch__number--1');
// const headerWrapper = document.querySelector('.header__wrapper');

// switchOne.addEventListener('click', () => {
//   switchOne.classList.add('switch__number--active');
//   headerWrapper.style.backgroundImage = "url(../images/header-bg-2.jpg)";
// });
