'use strict';

const burger = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__menu--active');
    nav.classList.toggle('header__nav--active');
  });
}

const form = document.querySelector('.feedback');
const inputs = document.querySelectorAll('.main__feedback-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
