'use strict';

const chbox = document.querySelector('#menu__toggle');

chbox.addEventListener('change', () => {
  if (chbox.checked) {
    document.body.classList.add('body--with-menu');
    document.querySelector('.menu__logo').src = './cross.svg';
  } else {
    document.body.classList.remove('body--with-menu');
    document.querySelector('.menu__logo').src = './menulogo.svg';
  }
});
