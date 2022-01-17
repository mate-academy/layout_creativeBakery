'use strict';
const toggler = document.querySelector('#toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu--hidden');
});
