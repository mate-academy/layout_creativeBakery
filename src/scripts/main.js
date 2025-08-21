'use strict';
const body = document.body;
const menu = document.getElementById('menu');
const openMenuButton = document.querySelector('.top-bar__menu .icon--menu');
const closeMenuButton = document.querySelector('#menu .icon--close');
const navLinks = document.querySelectorAll('#menu .nav__link');

function openMenu(e) {
  e && e.preventDefault();
  menu.classList.add('page__menu--open');
  body.classList.add('menu-lock');
}

function closeMenu(e) {
  menu.classList.remove('page__menu--open');
  body.classList.remove('menu-lock');
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
});
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('hashchange', closeMenu);
