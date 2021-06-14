'use strict';

const toggler = document.querySelector('.header__burger');
const navigation = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('menu__shown');
  toggler.classList.toggle('header__burger--close');
});
