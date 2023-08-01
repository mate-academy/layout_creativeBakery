'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.documentElement.style.overflowY = 'hidden';
    }, 250);
  } else {
    document.documentElement.style.overflowY = '';
  }
});
