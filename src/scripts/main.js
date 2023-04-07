'use strict';

const toggleBtn = document.querySelector('#toggleBtn');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();

  e.target.classList.toggle('header__burger--opened');
  navList.classList.toggle('nav__list--opened');

  navList.querySelectorAll('.nav__link').forEach(el => {
    el.addEventListener('click', () => {
      e.target.classList.remove('header__burger--opened');
      navList.classList.remove('nav__list--opened');
    });
  });
});
