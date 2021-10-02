'use strict';

const burger = document.querySelector('.burger');
const side = document.querySelector('.side-mobile');

burger.addEventListener('click', () => {
  side.classList.toggle('side-mobile--active');
  burger.classList.toggle('burger--active');
});

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
