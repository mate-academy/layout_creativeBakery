'use strict';

const header = document.querySelector('.header');
const prev = document.querySelector('.button--prev');
const next = document.querySelector('.button--next');

prev.addEventListener('click', () => {
  header.classList.add('header1');
  header.classList.remove('header');
});

next.addEventListener('click', () => {
  header.classList.add('header1');
  header.classList.remove('header');
});
