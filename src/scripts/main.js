'use strict';

const feedbackForm = document.querySelector('.feedback-form');
const inputName = document.querySelector('.feedback-form__name-input');
const inputEmail = document.querySelector('.feedback-form__email-input');
const inputPhone = document.querySelector('.feedback-form__phone-input');
const inputMessage = document.querySelector('.feedback-form__message-input');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  inputName.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputMessage.value = '';
});
