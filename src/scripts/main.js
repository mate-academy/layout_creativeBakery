'use strict';

const menu = document.querySelector('.menu');
const openButton = document.querySelector('[data-menu-open]');
const closeTriggers = document.querySelectorAll('[data-menu-close]');

const setMenu = (isOpen) => {
  menu.classList.toggle('menu--open', isOpen);
  document.body.classList.toggle('page--menu-open', isOpen);
  openButton.setAttribute('aria-expanded', String(isOpen));
};

openButton.addEventListener('click', () => setMenu(true));

closeTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
  }
});

window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
  if (event.matches) {
    setMenu(false);
  }
});
