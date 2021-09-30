'use strict';

const forms = document.querySelectorAll('.form');

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
});
