'use strict';

const nav = document.querySelector('.nav');
const toggler = document.querySelector('#nav-toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  // toggler.classList.toggle('toggler--active');
});
