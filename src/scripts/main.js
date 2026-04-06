'use strict';

const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.header__burger-menu');
const themeSwitcher = document.querySelector('.link__btn-icon-theme-switcher');

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('mobile-menu--open');

  burgerIcon.classList.toggle('header__burger-menu--open');
  burgerBtn.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
