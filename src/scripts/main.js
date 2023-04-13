'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--no-scroll');
  } else {
    document.body.classList.remove('page--no-scroll');
  }
});
