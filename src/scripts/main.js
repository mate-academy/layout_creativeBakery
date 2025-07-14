'use strict';

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

const menuLinks = menu.querySelectorAll('a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    button.classList.remove('hidden');
    menuClose.classList.add('hidden');
    document.body.classList.remove('menu-open');
  });
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
  button.classList.add('hidden');
  menuClose.classList.remove('hidden');
  document.body.classList.add('menu-open');
});

menuClose.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('active');
  button.classList.remove('hidden');
  menuClose.classList.add('hidden');
  document.body.classList.remove('menu-open');
});
