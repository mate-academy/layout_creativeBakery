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

/* ========== CHANGE BACKGROUND HEADER ========== */

function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 80 viewport height,
  // add the scroll-header class to the header tag

  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/* ========== SHOW SCROLL UP ========= */
function scrollUp() {
  const scroll = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height,
  // add the show-scroll class to the a tag with the scroll-top class

  if (this.scrollY >= 400) {
    scroll.classList.add('show-scroll');
  } else {
    scroll.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);
