'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}
