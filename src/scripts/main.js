'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.menu .nav__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});
