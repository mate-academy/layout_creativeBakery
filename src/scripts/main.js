'use strict';

//  Header
const toggle = document.querySelectorAll('.header__toggle');
const body = document.body;
const menuLink = document.querySelectorAll('.header__menu a');

function headerToggle() {
  if (body.classList.contains('_menu-open')) {
    body.classList.remove('_menu-open');
  } else {
    body.classList.add('_menu-open');
  }
}

toggle.forEach((item) => {
  item.addEventListener('click', headerToggle);
});

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
     body.classList.remove('_menu-open');
  });
});