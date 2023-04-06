'use strict';

const toggleBtn = document.querySelector('#toggleBtn');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();

  navList.classList.toggle('nav__list--opened');
});
