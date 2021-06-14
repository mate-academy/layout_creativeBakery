'use strict';

const toggler = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header-asidebar__right-menu');
const page = document.querySelector('.page');
const footer = document.querySelector('.footer');

const toggleMenu = () => {
  toggler.classList.toggle('header__menu-icon--active');
  menu.classList.toggle('header-asidebar__right-menu--active');
  page.classList.toggle('page--fixed');
  footer.classList.toggle('footer--fixed');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

document.getElementById('feedback-form__message').innerHTML
  = document.getElementById('feedback-form__message').innerHTML.trim();
