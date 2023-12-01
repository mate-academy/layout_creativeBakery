'use strict';

const body = document.body;
const pageMenu = document.querySelector('.page__menu');
const iconMenu = document.querySelector('.icon--hamburger');

iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

pageMenu.addEventListener('click', () => {
  body.classList.remove('unscroll');
});
