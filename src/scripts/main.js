'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
});
