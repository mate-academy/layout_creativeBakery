'use strict';

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
};

myFunction();
myFunction();

const menu = document.getElementById('myDropdown');
const links = document.getElementsByClassName('menu__nav__list-item-link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('show');
  });
};
