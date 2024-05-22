'use strict';

const navLink = document.querySelector('a[href="#nav"]');
const navCloseBtn = document.querySelector('.header__cover--top--nav--top--close');
const body = document.body;

navLink.addEventListener('click', () => {
  console.log('Open');
  body.classList.add('no-scroll');
});

navCloseBtn.addEventListener('click', () => {
  console.log('Close');
  body.classList.remove('no-scroll');
});
