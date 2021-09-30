'use strict';

const burger = document.querySelector('.burger');
const side = document.querySelector('.side-mobile');

burger.addEventListener('click', () => {
  side.classList.toggle('side-mobile--active');
});

const formAddres = document.querySelector('.form-addres');

formAddres.addEventListener('submit', (e) => {
  e.preventDefault();
});
