'use strict';

const headerTitle = document.querySelector('.header__title');
const headerText = document.querySelector('.header__text');
const headerRtCol = document.querySelector('.header__right-column');
const burger = document.querySelector('.nav__burger');
const callbackTop = document.querySelector('.callback__top');
const callback = document.querySelector('.callback');
const navList = document.querySelector('.right-nav');
const burgerLine = document.querySelector('.nav__burger-line');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  headerTitle.classList.toggle('header__title--active');
  headerText.classList.toggle('header__text--active');
  headerRtCol.classList.toggle('header__right-column--active');
  callbackTop.classList.toggle('callback__top--active');
  callback.classList.toggle('callback--active');
  navList.classList.toggle('right-nav--active');
  burger.classList.toggle('nav__burger--active');
  burgerLine.classList.toggle('nav__burger-line--active');
});
