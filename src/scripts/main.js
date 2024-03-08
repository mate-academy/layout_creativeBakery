// @ts-nocheck
'use strict';

/* #region hide menu icon on click */
const icons = document.querySelector('.top-bar__icons');
const menuIcon = document.querySelector('.top-bar__icon--burger-menu');
const closeIcon = document.querySelector('.top-bar__icon--close');
const logoTopBar = document.querySelector('.menu .top-bar__logo-img');
const menuLinks = document.querySelectorAll(
  '.nav--aside .nav__item:nth-of-type(-n+3)',
);

menuIcon?.addEventListener('click', () => {
  icons.classList.toggle('top-bar__icons--show');
});

closeIcon?.addEventListener('click', () => {
  icons.classList.toggle('top-bar__icons--show');
});

logoTopBar?.addEventListener('click', () => {
  icons.classList.toggle('top-bar__icons--show');
});

menuLinks?.forEach(node => {
  node?.addEventListener('click', () => {
    icons.classList.toggle('top-bar__icons--show');
  });
});
/* #end hide menu icon on click */
