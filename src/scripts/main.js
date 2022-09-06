'use strict';

const chbox = document.querySelector('#menu__toggle');

chbox.addEventListener('change', () => {
  if (chbox.checked) {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
