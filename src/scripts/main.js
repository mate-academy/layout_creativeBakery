'use strict';

import '../styles/main.scss';
// ─── mob-menu Bakerlab ───────────────────────────────────────────────

const burgerBtn = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu__close');
const menuElements = document.querySelectorAll(
  '.mobile-menu__link, .mobile-menu__contact',
);

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu--active');
  document.documentElement.classList.toggle('no-scroll');
};

if (burgerBtn) {
  burgerBtn.addEventListener('click', toggleMenu);
}

if (closeBtn) {
  closeBtn.addEventListener('click', toggleMenu);
}

menuElements.forEach((element) => {
  element.addEventListener('click', toggleMenu);
});
