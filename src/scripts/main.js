'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu');
  } else {
    document.body.classList.remove('menu');
  }
});
