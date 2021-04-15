'use strict';

const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav');
const span1 = document.getElementById('burger__line--1');
const span2 = document.getElementById('burger__line--2');
const span3 = document.getElementById('burger__line--3');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('display-none');
  span1.classList.toggle('rotate-plus');
  span3.classList.toggle('rotate-minus');
  span2.classList.toggle('display-none');
});
