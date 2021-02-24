'use strict';

const burgerOpen = document.getElementById('burger');
const burgerClose = document.getElementById('burger-close');
const header = document.getElementById('header-mobile');
const mobileLinks = document.getElementsByClassName('header__nav-mobile-item');
const leftArrow = document.getElementById('left-arr');
const rightArrow = document.getElementById('right-arr');
const upArrow = document.getElementById('up-arr');
const downArrow = document.getElementById('down-arr');
const headerNumbers = document.getElementsByClassName('header__number');
const numbers = document.getElementsByClassName('header__mobile-num');
const mobileClass = 'header__mobile-num--big';
const desctopClass = 'header__number--big';

const menuOpen = () => {
  header.style.display = 'flex';
};

const menuClose = () => {
  header.style.display = 'none';
};

const next = (arr, className) => {
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
    if ([...arr][i].classList.contains(className)) {
      position = i;
    }
  }
  [...arr][position].classList.remove(className);

  if (position === numbers.length - 1) {
    position = 0;
    [...arr][position].classList.add(className);
  } else {
    [...arr][position + 1].classList.add(className);
  }
};

const previous = (arr, className) => {
  let position = 0;

  for (let i = 0; i < numbers.length; i++) {
    if ([...arr][i].classList.contains(className)) {
      position = i;
    }
  }
  [...arr][position].classList.remove(className);

  if (position === 0) {
    position = numbers.length - 1;
    [...arr][position].classList.add(className);
  } else {
    [...arr][position - 1].classList.add(className);
  }
};

rightArrow.addEventListener('click', () => next(numbers, mobileClass));
leftArrow.addEventListener('click', () => previous(mobileClass));
downArrow.addEventListener('click', () => next(headerNumbers, desctopClass));
upArrow.addEventListener('click', () => previous(headerNumbers, desctopClass));
burgerOpen.addEventListener('click', menuOpen);
burgerClose.addEventListener('click', menuClose);
[...mobileLinks].map(item => item.addEventListener('click', menuClose));
