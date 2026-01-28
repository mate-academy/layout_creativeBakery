'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--red')) {
    page.classList.remove('page--theme--red');
    switcher.classList.remove('theme-switcher--theme--red');
  } else {
    page.classList.add('page--theme--red');
    switcher.classList.add('theme-switcher--theme--red');
  }
});
