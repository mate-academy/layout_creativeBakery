'use strict';

const chbox = document.querySelector('#menu__toggle');
const chlink = document.querySelectorAll('.top-actions__list-link');

chbox.addEventListener('change', () => {
  if (chbox.checked) {
    document.body.classList.add('body--with-menu');
    document.querySelector('.menu__logo').src = 'https://raw.githubusercontent.com/vladimir-dublya/layout_creativeBakery/bc8eab8d695a2e911be04083298ba6a73952d543/src/images/cross.svg';
  } else {
    document.body.classList.remove('body--with-menu');
    document.querySelector('.menu__logo').src = 'https://raw.githubusercontent.com/vladimir-dublya/layout_creativeBakery/bc8eab8d695a2e911be04083298ba6a73952d543/src/images/menulogo.svg';
  }
});

for (let i = 0; i < chlink.length; i++) {
  chlink[i].addEventListener('click', () => {
    document.body.classList.remove('body--with-menu');
    chbox.checked = false;
    document.querySelector('.menu__logo').src = 'https://raw.githubusercontent.com/vladimir-dublya/layout_creativeBakery/bc8eab8d695a2e911be04083298ba6a73952d543/src/images/menulogo.svg';
  });
}

