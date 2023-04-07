'use strict';

const toggleBtn = document.querySelector('#toggleBtn');
const navList = document.querySelector('.nav__list');
let opened;

const blockScreen = function() {
  window.scrollTo(0, 0);
};

toggleBtn.onclick = function(e) {
  e.preventDefault();
  opened = !opened;

  // block screen when nav is open
  if (!opened) {
    window.removeEventListener('scroll', blockScreen, true);
  }

  if (opened) {
    window.addEventListener('scroll', blockScreen, true);
  }

  // toggle class on btn and nav
  e.target.classList.toggle('header__burger--opened');
  navList.classList.toggle('nav__list--opened');

  // clicks on text links
  navList.querySelectorAll('.nav__link').forEach(el => {
    el.addEventListener('click', (f) => {
      opened = false;
      window.removeEventListener('scroll', blockScreen, true);
      e.target.classList.remove('header__burger--opened');
      navList.classList.remove('nav__list--opened');
    });
  });
};
