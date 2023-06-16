'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
