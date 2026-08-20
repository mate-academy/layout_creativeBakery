'use strict';

const page = document.querySelector('.page');
const switchers = document.querySelectorAll('.theme-toggle__input');

const savedTheme = localStorage.getItem('theme');

const setTheme = (isPink) => {
  page.classList.toggle('page--theme--pink', isPink);

  switchers.forEach((switcher) => {
    switcher.checked = isPink;
  });

  localStorage.setItem('theme', isPink ? 'pink' : 'default');
};

switchers.forEach((switcher) => {
  switcher.checked = savedTheme === 'pink';

  switcher.addEventListener('change', () => {
    setTheme(switcher.checked);
  });
});

setTheme(savedTheme === 'pink');
