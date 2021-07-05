'use strict';

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('header__menu-button--active');
  menu.classList.toggle('menu--active');
});

const form = document.querySelector('.feedback__form');
const inputs = document.querySelectorAll('.feedback__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
