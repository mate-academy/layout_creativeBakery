'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const toggler = document.querySelector('.burger__line');
const link = document.querySelector('.nav__link');
const map = document.querySelector('.bakershops__img');
const min = document.querySelector('.bakershops__label--min');
const max = document.querySelector('.bakershops__label--max');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--mobile');
  toggler.classList.toggle('burger__line--open');
  link.classList.toggle('nav__link--active');
});

link.addEventListener('click', () => {
  link.classList.toggle('nav__link--active');
});

min.addEventListener('click', () => {
  map.style.transform = 'scale(0.9)';
});

max.addEventListener('click', () => {
  map.style.transform = 'scale(1.1)';
});
