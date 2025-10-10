'use strict';

const menuButton = document.querySelector('.header__menu-button');
const menuLinks = document.querySelectorAll('.header__link');
const iconMenu = document.querySelector('.icon--menu');
const nav = document.querySelector('.header__nav');
const pageBody = document.querySelector('.page__body');
const learnButton = document.querySelector('.header__button');
const orderButtons = document.querySelectorAll('.product-card__button')

function closeMenu() {
  nav.classList.remove('header__nav--open');
  menuButton.classList.remove('header__menu-button--open');
  pageBody.classList.remove('page__body--menu-open');
  iconMenu.classList.remove('icon--close');
  iconMenu.classList.add('icon--menu');
}

menuButton.addEventListener('click', (e) => {
  e.preventDefault();

  nav.classList.toggle('header__nav--open');
  menuButton.classList.toggle('header__menu-button--open');
  pageBody.classList.toggle('page__body--menu-open');

  iconMenu.classList.toggle('icon--close');
  iconMenu.classList.toggle('icon--menu');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

learnButton.addEventListener('click', () => {
  document.getElementById('about-us').scrollIntoView({ behavior: "smooth" });
});

orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
  })
});
