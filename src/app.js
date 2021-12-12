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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return false;
      }
    };
  } else {
    document.body.classList.remove('page__body--with-menu');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return true;
      }
    };
  }
});
