'use strict';

const headerButton = document.querySelector('.header__button');
const header = document.querySelector('.header');
const aboutUs = document.querySelector('.about-us');
const contacts = document.querySelector('.footer');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const burgerMenu = document.querySelector('.header__burger-menu');
const body = document.getElementById('home');
const orderButtons = document.querySelectorAll('.product__order-button');

headerButton.addEventListener('click', () => {
  aboutUs.scrollIntoView({ behavior: 'smooth' });
});

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  body.classList.toggle('block-scroll');
  header.classList.toggle('block-scroll');
  burgerMenu.classList.toggle('header__burger-menu--active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (burgerMenu.offsetWidth > 0) {
      body.classList.toggle('block-scroll');
      header.classList.toggle('block-scroll');
      nav.classList.toggle('nav__active');
      burgerMenu.classList.toggle('header__burger-menu--active');
    }
  });
});

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contacts.scrollIntoView({ behavior: 'smooth' });
  });
});
