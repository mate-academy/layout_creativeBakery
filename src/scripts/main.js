'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('nav__header');
  } else {
    document.body.classList.remove('nav__header');
  }
});
