'use strict';

const body = document.querySelector('.page__body');

function scrollChange() {
  const hash = window.location.hash;

  if (hash === '#menu') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

window.onhashchange = scrollChange;

scrollChange();
