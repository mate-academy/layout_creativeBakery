'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const toggler = document.querySelector('.burger__line');
const link = document.querySelector('.nav__link');
const map = document.querySelector('.bakershops__img');
const min = document.querySelector('.bakershops__label--min');
const max = document.querySelector('.bakershops__label--max');
const pressTop = document.querySelector('.nav__press--top');
const pressBottom = document.querySelector('.nav__press--bottom');
const listTop = document.querySelector('.list--top');
const listBottom = document.querySelector('.list--bottom');

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

pressTop.addEventListener('click', () => {
  listTop.classList.toggle('list--open');
  pressTop.style.display = 'none';
});

pressBottom.addEventListener('click', () => {
  listBottom.classList.toggle('list--open');
  pressBottom.style.display = 'none';
});

listTop.addEventListener('click', (event) => {
  pressTop.innerText = event.target.innerText;
  listTop.classList.toggle('list--open');
  pressTop.style.display = 'block';
});

listBottom.addEventListener('click', (event) => {
  pressBottom.innerText = event.target.innerText;
  listBottom.classList.toggle('list--open');
  pressBottom.style.display = 'block';
});
