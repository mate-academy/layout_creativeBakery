'use strict';

const menuOpener = document.querySelector('.nav__burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu__link');

const toggleMenu = () => {
  menuOpener.classList.toggle('nav__burger--active');
  menu.classList.toggle('menu--active');
  document.body.classList.toggle('page__body--with-menu');
};

menuOpener.addEventListener('click', toggleMenu);

const checkMedia = function() {
  const mediaQuery = window.matchMedia('(max-width: 1199px)');

  if (mediaQuery.matches) {
    links.forEach((link) => {
      link.addEventListener('click', toggleMenu);
    });
  }
};

checkMedia();
