'use strict';

const toggler = document.querySelector('.nav__burger');
const navigation = document.querySelector('.menu');
const menuList = document.querySelector('.menu__nav-list');
const content = document.querySelector('.page__content');
const prevButtonHeader = document.querySelector('.slider-header__arrow--prev');
const nextButtonHeader = document.querySelector('.slider-header__arrow--next');
const headerNumbers = document.querySelectorAll('.slider-header__item');
const prevButtonMenu = document.querySelector('.slider-menu__arrow--prev');
const nextButtonMenu = document.querySelector('.slider-menu__arrow--next');
const menuNumbers = document.querySelectorAll('.slider-menu__item');
const header = document.querySelector('.header');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('menu--shown');
  toggler.classList.toggle('nav__burger--close');
  content.classList.toggle('page--hidden');
});

menuList.addEventListener('click', () => {
  navigation.classList.toggle('menu--shown');
  toggler.classList.toggle('nav__burger--close');
  content.classList.toggle('page--hidden');
});

let index = 0;

const imagesArray = [
  'header--image-0',
  'header--image-1',
  'header--image-2'];

const activeNumber = (n, array) => {
  for (const number of array) {
    number.classList.remove('number-active');
  }
  array[n].classList.add('number-active');

  for (const image of imagesArray) {
    header.classList.remove(image);
  }
  header.classList.add(imagesArray[n]);
};

const nextNumber = (array) => {
  return () => {
    if (index === array.length - 1) {
      index = 0;
      activeNumber(index, array);
    } else {
      index++;
      activeNumber(index, array);
    }
  };
};

const prevNumber = (array) => {
  return () => {
    if (index === 0) {
      index = array.length - 1;
      activeNumber(index, array);
    } else {
      index--;
      activeNumber(index, array);
    }
  };
};

prevButtonHeader.addEventListener('click', prevNumber(headerNumbers));
nextButtonHeader.addEventListener('click', nextNumber(headerNumbers));
nextButtonMenu.addEventListener('click', nextNumber(menuNumbers));
prevButtonMenu.addEventListener('click', prevNumber(menuNumbers));
