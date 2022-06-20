'use strict';

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;

  if (hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
