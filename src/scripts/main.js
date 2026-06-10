'use strict';


const btnBurger = document.querySelector('.top-bar__btn--menu');
const asideMenu = document.querySelector('.aside-menu');
const btnClose = document.querySelector('.aside-menu__btn--close')

function menuOpen() {
  asideMenu.classList.add('aside-menu--open');
  document.body.style.overflow = 'hidden';
}

function menuClose() {
  asideMenu.classList.remove('aside-menu--open');
  document.body.style.overflow = '';
}

btnBurger.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuClose);

const linkMenu = document.querySelectorAll('.nav__link');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    menuClose();
  }
});

linkMenu.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      menuClose();
    }
  });
});
