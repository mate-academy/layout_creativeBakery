'use strict';

const navLink = document.querySelectorAll('.nav__link');
const checkbox = document.querySelector('.nav__checkbox');

navLink.forEach(el => {
  el.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
});
