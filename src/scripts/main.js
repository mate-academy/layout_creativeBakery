'use strict';

const toggler = document.querySelector('#toggler');
const nav1 = document.querySelector('.toggler1');
const nav2 = document.querySelector('.toggler2');
const nav3 = document.querySelector('.toggler3');
const nav4 = document.querySelector('.toggler4');

const menu = document.querySelector('.menu__content');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu__content--hidden');
  toggler.classList.toggle('header__burgerMenu--hidden');
});

nav1.addEventListener('click', function() {
  menu.classList.toggle('menu__content--hidden');
  toggler.classList.toggle('header__burgerMenu--hidden');
});

nav2.addEventListener('click', function() {
  menu.classList.toggle('menu__content--hidden');
  toggler.classList.toggle('header__burgerMenu--hidden');
});

nav3.addEventListener('click', function() {
  menu.classList.toggle('menu__content--hidden');
  toggler.classList.toggle('header__burgerMenu--hidden');
});

nav4.addEventListener('click', function() {
  menu.classList.toggle('menu__content--hidden');
  toggler.classList.toggle('header__burgerMenu--hidden');
});
