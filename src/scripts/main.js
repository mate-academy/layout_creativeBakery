'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.header__switcher');
const themeName = document.querySelector('.header__theme-name');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--light-blue')) {
    page.classList.remove('page--theme--light-blue');
    switcher.classList.remove('header__switcher--theme--light-blue');
    themeName.textContent = 'Theme: Hot Pink';
  } else {
    page.classList.add('page--theme--light-blue');
    switcher.classList.add('header__switcher--theme--light-blue');
    themeName.textContent = 'Theme: Light Blue';
  }
});
