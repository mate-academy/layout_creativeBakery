'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--pink')) {
    page.classList.remove('page--theme--pink');
    switcher.classList.remove('theme-switcher--theme--pink');
  } else {
    page.classList.add('page--theme--pink');
    switcher.classList.add('theme-switcher--theme--pink');
  }
});
