'use strict';

const headerMenu = document.querySelector('.header__menu');
const asideMenu = document.querySelector('.aside__menu')
const section = document.querySelector('.section')
const body = document.querySelector('body')

headerMenu.addEventListener('click', () => {
  body.classList.add('menu__active');
  section.classList.add('section__display-none')
})

asideMenu.addEventListener('click', () => {
  body.classList.remove('menu__active');
  section.classList.remove('section__display-none')
})
