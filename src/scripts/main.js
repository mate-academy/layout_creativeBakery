'use strict';

const form = document.getElementById('contact-us-form');

if (form) {
  form.addEventListener('submit', function handleSubmin(event) {
    event.preventDefault();

    form.reset();
  });
}

if (window) {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });
}
