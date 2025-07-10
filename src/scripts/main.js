'use strict';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.page__mobile-menu');
const menuLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', (e) => {
  e.target.classList.toggle('burger--close');
  mobileMenu.classList.toggle('page__mobile-menu--active');
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('page__mobile-menu--active');
    burger.classList.remove('burger--close');
  })
})
