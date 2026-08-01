'use strict';

const menuBtn = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const headerNavList = document.querySelector('.header__nav-list');

const closeMenu = () => {
  header.classList.remove('header--open');
  document.body.classList.remove('no-scroll');
  menuBtn.setAttribute('aria-expanded', false);
}

menuBtn.addEventListener('click', () => {
  header.classList.toggle('header--open');
  document.body.classList.toggle('no-scroll');
  menuBtn.setAttribute('aria-expanded', header.classList.contains('header--open'));
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') {
    return;
  }

  closeMenu();
});

headerNavList.addEventListener('click', (e) => {
  if (!e.target.closest('.header__nav-list-item-link')) {
    return;
  }

  closeMenu();
});
