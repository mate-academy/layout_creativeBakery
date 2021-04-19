'use strict';

const header = document.querySelector('.header__nav');
const toggler = document.querySelector('.header__toggler');

toggler.addEventListener('click', () => {
  header.classList.toggle('header__nav--active');
  toggler.classList.toggle('header__toggler--active');
});
