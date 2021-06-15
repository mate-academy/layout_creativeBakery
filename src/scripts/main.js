'use strict';

const toggler = document.querySelector('.nav__burger');
const navigation = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('menu__shown');
  toggler.classList.toggle('nav__burger--close');
});
