'use strict';

const menuButton = document.querySelector('.icon--menu');
const closeButton = document.querySelector('.icon--close');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
  nav.classList.add('nav--active');
  menuButton.classList.add('hidden');
  closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  menuButton.classList.remove('hidden');
  closeButton.classList.add('hidden');
  document.body.classList.remove('page__body--with-menu');
});
