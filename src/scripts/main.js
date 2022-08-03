'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// theme-toggle
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('theme', 'menu-theme').addEventListener('change',
    function() {
      if (this.checked) {
        document.body.classList.add('page--change-theme');
      } else {
        document.body.classList.remove('page--change-theme');
      }
    }, false);
});
