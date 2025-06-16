'use strict';

const body = document.querySelector('.page__body');
const menu = document.querySelector('.page__menu');
const menuContent = document.querySelector('.menu__content');
const menuBtn = document.querySelector('.top-bar__menu-btn');
const navList = document.querySelector('.nav');
const topBar = document.querySelector('.top-bar__menu');
const phoneBtn = document.querySelector('.top-bar__phone-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('page__menu--active');
  menuBtn.classList.toggle('top-bar__menu-btn--active');
  body.classList.toggle('page__body--lock');
});

function moveBtn() {
  if (window.innerWidth < 1024) {
    menuContent.prepend(phoneBtn);
    menuContent.prepend(navList);
  } else {
    topBar.prepend(phoneBtn);
    topBar.prepend(navList);
  };
}

window.addEventListener('load', moveBtn);
window.addEventListener('resize', moveBtn);

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('page__menu--active');
    menuBtn.classList.remove('top-bar__menu-btn--active');
    body.classList.remove('page__body--lock');
  });
});

document.querySelector('.top-bar__logo').addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
  menuBtn.classList.remove('top-bar__menu-btn--active');
  body.classList.remove('page__body--lock');
});

document.querySelector('.top-bar__phone-btn').addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
  menuBtn.classList.remove('top-bar__menu-btn--active');
  body.classList.remove('page__body--lock');
});
