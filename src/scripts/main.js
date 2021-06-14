'use strict';

const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav');
const navList = document.getElementById('nav-list');
const span1 = document.getElementById('burger__line--1');
const span2 = document.getElementById('burger__line--2');
const span3 = document.getElementById('burger__line--3');
const togglerRight = document.querySelector('.toggler--right');
const togglerLeft = document.querySelector('.toggler--left');

const numbers = document.querySelectorAll('.roller__item');
const hero = document.querySelector('.hero');

let count = 0;

togglerRight.addEventListener('click', () => {
  if (count < 2) {
    count++;
    numbers[count - 1].classList.remove('roller__item--selected');
    numbers[count].classList.add('roller__item--selected');
    togleBackground();
  }
});

togglerLeft.addEventListener('click', () => {
  if (count <= 2 && count > 0) {
    count--;
    numbers[count + 1].classList.remove('roller__item--selected');
    numbers[count].classList.add('roller__item--selected');
    togleBackground();
  }
});

const togleBackground = () => {
  switch (count) {
    case 1:
      hero.classList.add('hero--background2');
      hero.classList.remove('hero--background3');
      hero.classList.remove('hero--background1');
      break;
    case 2:
      hero.classList.add('hero--background3');
      hero.classList.remove('hero--background2');
      hero.classList.remove('hero--background1');
      break;
    default:
      hero.classList.add('hero--background1');
      hero.classList.remove('hero--background3');
      hero.classList.remove('hero--background2');
  };
};

burger.addEventListener('click', () => {
  navMenu.classList.toggle('display-none');
  span1.classList.toggle('rotate-plus');
  span3.classList.toggle('rotate-minus');
  span2.classList.toggle('display-none');
});

navList.addEventListener('click', () => {
  navMenu.classList.toggle('display-none');
  span1.classList.toggle('rotate-plus');
  span3.classList.toggle('rotate-minus');
  span2.classList.toggle('display-none');
});
