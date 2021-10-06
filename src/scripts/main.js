'use strict';

// 1 header side-menu pop
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

// 2 map resize
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

// 3 about-slider
const leftButton = document.querySelector('.slider__btn--prev');
const rightButton = document.querySelector('.slider__btn--next');
const slides = document.querySelector('.about__facts');

let position = 0;

move(0);

leftButton.addEventListener('click', function() {
  move(-1);
});

rightButton.addEventListener('click', function() {
  move(1);
});

function move(shift) {
  const count = slides.children.length;

  position += shift;

  leftButton.disabled = position <= 0;
  rightButton.disabled = position >= count - 1;

  slides.style.transform = `translateX(${-position * 100}%)`;
}

// 4 half working header slider
const switchOne = document.querySelector('.switch__number--1');
const switchTwo = document.querySelector('.switch__number--2');
const switchThree = document.querySelector('.switch__number--3');
const headerWrapper = document.querySelector('.header__wrapper');

switchOne.addEventListener('click', () => {
  switchOne.classList.add('switch__number--active');
  headerWrapper.classList.add('header__wrapper--1');

  switchTwo.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--2');

  switchThree.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--3');
});

switchTwo.addEventListener('click', () => {
  switchTwo.classList.add('switch__number--active');
  headerWrapper.classList.add('header__wrapper--2');

  switchOne.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--1');

  switchThree.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--3');
});

switchThree.addEventListener('click', () => {
  switchThree.classList.add('switch__number--active');
  headerWrapper.classList.add('header__wrapper--3');

  switchTwo.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--2');

  switchOne.classList.remove('switch__number--active');
  headerWrapper.classList.remove('header__wrapper--1');
});

// 5 sidebar slider
const upButton = document.querySelector('.switch-large__btn--prev');
const downButton = document.querySelector('.switch-large__btn--next');
const pageNumbers = document.querySelector('.switch-large__wrapper');

let start = 1;

step(0);

upButton.addEventListener('click', function() {
  step(-1);
});

downButton.addEventListener('click', function() {
  step(1);
});

function step(shift) {
  const counter = pageNumbers.children.length;

  start += shift;

  upButton.disabled = start <= 1;
  downButton.disabled = start >= counter;

  pageNumbers.classList.remove(`switch-large__wrapper--${start - 1}`);
  pageNumbers.classList.remove(`switch-large__wrapper--${start + 1}`);
  pageNumbers.classList.add(`switch-large__wrapper--${start}`);
  headerWrapper.classList.remove(`header__wrapper--${start - 1}`);
  headerWrapper.classList.remove(`header__wrapper--${start + 1}`);
  headerWrapper.classList.add(`header__wrapper--${start}`);
}
