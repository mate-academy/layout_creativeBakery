'use strict';

const toggler = document.querySelector('.nav__burger');
const navigation = document.querySelector('.menu');
const menuList = document.querySelector('.menu__nav-list');
const content = document.querySelector('.page__content');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('menu--shown');
  toggler.classList.toggle('nav__burger--close');
  content.classList.toggle('page--hidden');
});

menuList.addEventListener('click', () => {
  navigation.classList.toggle('menu--shown');
  toggler.classList.toggle('nav__burger--close');
  content.classList.toggle('page--hidden');
});
