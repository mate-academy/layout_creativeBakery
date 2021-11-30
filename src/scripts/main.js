'use strict';

// change body class

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#page__menu') {
    document.body.className = 'page__body';
  } else {
    document.body.className = '';
  }
});

// change banner content

const headerPages = document.querySelector('.header__pages');

const upBtn = document.querySelector('.header__pages-row-up');
const downBtn = document.querySelector('.header__pages-row-down');

const bannerCounter = document.querySelectorAll('.header__item');

let counter = 0;

downBtn.addEventListener('click', () => {
  counter++;

  if (counter === 3) {
    counter = 0;
  }

  document.querySelector('.header__item--active')
    .classList.remove('header__item--active');

  bannerCounter[counter]
    .classList.add('header__item--active');
});

upBtn.addEventListener('click', () => {
  counter--;

  if (counter === -1) {
    counter = 2;
  }

  document.querySelector('.header__item--active')
    .classList.remove('header__item--active');
  bannerCounter[counter].classList.add('header__item--active');
});

headerPages.addEventListener('click', e => {
  const target = e.target.closest('.header__item');

  if (!target) {
    return;
  }

  document.querySelector('.header__item--active')
    .classList.remove('header__item--active');
  target.classList.add('header__item--active');
});
