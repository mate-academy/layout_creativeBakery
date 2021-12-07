'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide1') {
    document.getElementById('header__slider').classList.add('header__left1');
  } else {
    document.getElementById('header__slider').classList.remove('header__left1');
  }

  if (window.location.hash === '#slide2') {
    document.getElementById('header__slider').classList.add('header__left2');
  } else {
    document.getElementById('header__slider').classList.remove('header__left2');
  }

  if (window.location.hash === '#slide3') {
    document.getElementById('header__slider').classList.add('header__left3');
  } else {
    document.getElementById('header__slider').classList.remove('header__left3');
  }
});

