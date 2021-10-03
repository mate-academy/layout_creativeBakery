'use strict';

const burger = document.querySelector('.burger');
const side = document.querySelector('.side-mobile');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    side.classList.add('side-mobile--active');
    burger.classList.add('burger--active');
  } else {
    side.classList.remove('side-mobile--active');
    burger.classList.remove('burger--active');
  }
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
