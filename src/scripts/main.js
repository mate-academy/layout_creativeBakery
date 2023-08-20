'use strict';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

let menu = document.getElementById("myDropdown");
let links = document.getElementsByClassName("menu__nav__list-item-link");

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('show')
  })
};

