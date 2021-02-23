'use strict';

const menuToggle = () => {
  mobileMenu.classList.toggle('mobile--active');
};

const burgerBtn = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.mobile__close');
const navLinks = [...document.querySelectorAll('.nav__link')];
const mobileMenu = document.querySelector('.mobile');

window.addEventListener('resize', event => {
  if (window.innerWidth >= 1000) {
    mobileMenu.classList.remove('mobile--active');
  }
});

navLinks.forEach(link => link.addEventListener('click', menuToggle));
burgerBtn.addEventListener('click', menuToggle);
closeBtn.addEventListener('click', menuToggle);
