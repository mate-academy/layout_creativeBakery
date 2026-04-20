'use strict';
const menu = document.querySelector('#mobile-menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menuLinks = document.querySelectorAll('.menu__link');

openBtn.addEventListener('click', () => {
  menu.classList.add('menu--is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu--is-open');
  document.body.style.overflow = '';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--is-open');
    document.body.style.overflow = '';
  });
});
