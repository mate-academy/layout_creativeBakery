'use strict';

/* ======= SHOW MENU ======= */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ======= MENU VISIBLE ======= */

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* ======= MENU HIDDEN ======= */

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ======= REMOVE MENU MOBILE ======= */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenuMobile = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class

  navMenuMobile.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
