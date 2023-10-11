'use strict';

const openMenu = document.getElementById('open-menu');
const navHidden = document.getElementById('nav-hidden');

document.addEventListener('click', (event) => {
  if (event.target === openMenu || openMenu.contains(event.target)) {
    navHidden.style.right = 0;
  } else {
    navHidden.style.right = '-100vw';
  }
});

const navContainer = document.getElementById('nav-container');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    navContainer.style.top = '-95px';
  } else {
    navContainer.style.top = '0';
  }
  lastScrollTop = currentScrollTop;
});
