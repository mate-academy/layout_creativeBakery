'use strict';

const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
// const cross = document.querySelector('#cross');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__hidden');
});

// cross.addEventListener('click', () => {
//   menu.classList.add('menu__hidden');
// });
