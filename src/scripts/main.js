'use strict';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of feedbackForm.elements) {
    input.value = '';
  }
});

const headerNav = document.querySelector('.nav');
const burgerButton = document.querySelector('.header__toggler');

headerNav.addEventListener('click', (event) => {
  burgerButton.click();
});
