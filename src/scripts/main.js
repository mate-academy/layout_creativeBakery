'use strict';

const toggler = document.querySelector('.nav__burger');
const navigation = document.querySelector('.menu');
const menuList = document.querySelector('.menu__nav-list');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('menu__shown');
  toggler.classList.toggle('nav__burger--close');
});

menuList.addEventListener('click', () => {
  navigation.classList.toggle('menu__shown');
  toggler.classList.toggle('nav__burger--close');
});
