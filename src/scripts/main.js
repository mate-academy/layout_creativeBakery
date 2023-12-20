'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('default__body--no-scrol');
  } else {
    document.body.classList.remove('default__body--no-scrol');
  }
});
