'use strict';

const menuBtn = document.querySelector('.toggle');
const burger = document.querySelector('.burger');

menuBtn.addEventListener('click', (e) => {
  burger.classList.toggle('burger--active');
  menuBtn.classList.toggle('toggle--active');
});
