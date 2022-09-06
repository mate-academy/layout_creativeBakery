'use strict';

const chbox = document.getElementById('menu__toggle');

if (chbox.checked) {
  document.body.classList.add('body--with-menu');
} else {
  document.body.classList.remove('body--with-menu');
}
