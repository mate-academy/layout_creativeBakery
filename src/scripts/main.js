'use strict';

const menuBtn = document.querySelector('.nav__mobile-btn-link');
const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu__x');

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show-menu')) {
      menu.classList.remove('show-menu');
      menu.classList.toggle('hide-menu');
    }
  });
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  menu.classList.remove('hide-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  menu.classList.add('hide-menu');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    menu.classList.remove('show-menu');
    menu.classList.remove('hide-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
