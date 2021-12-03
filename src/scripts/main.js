'use strict';

const formAddres = document.querySelector('.form-addres');
const contactsForm = document.querySelector('#contacts__form');

function prevDefault(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault();
    element.reset();
  });
}

prevDefault(formAddres);
prevDefault(contactsForm);
