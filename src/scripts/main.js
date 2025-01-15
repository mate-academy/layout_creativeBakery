'use strict';

const body = document.querySelector('.page__body');
const open = document.querySelector('.top-bar__icon--menu');
const close = document.querySelector('.top-bar__icon--close');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
})

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
})
