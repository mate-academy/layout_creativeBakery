'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu--with-menu');
  } else {
    document.body.classList.remove('page__menu--with-menu');
  }
});
