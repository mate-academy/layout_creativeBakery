'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.page__menu');
  const openMenuBtn = document.querySelector('.hero__open-menu');
  const closeMenuBtn = document.querySelector('.menu__close-menu');

  const scrollToTop = () => {
    document.documentElement.scrollIntoView();
  }

  const openMenu = () => {
    menu?.classList.add('page__menu--active');
  }

  const closeMenu = () => {
    menu?.classList.remove('page__menu--active');
  }

  openMenuBtn.addEventListener('click', () => {
    openMenu();
    scrollToTop();
  });

  closeMenuBtn.addEventListener('click', () => {
    closeMenu();
    scrollToTop();
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  })
});
