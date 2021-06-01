'use strict';

const header = document.querySelector('.header__nav');
const toggler = document.querySelector('.header__toggler');
// const nav = document.querySelector('.header__nav');
// const navLink = document.querySelector('.nav__link');
// const navList = document.querySelector('.nav__list');
// const navItem = document.querySelector('.nav__item');
// const page = document.querySelector('.page');

const onClick = () => {
  header.classList.toggle('header__nav--active');
  toggler.classList.toggle('header__toggler--active');
  // page.classList.toggle('page--active');
};

toggler.addEventListener('click', onClick);
// navLink.addEventListener('click', onClick);
// navItem.addEventListener('click', onClick);
// navList.addEventListener('click', onClick);
// nav.addEventListener('click', onClick);
