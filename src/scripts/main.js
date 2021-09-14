'use strict';

const btnOpen = document.getElementById('menuBtnOpen');
const btnClose = document.getElementById('menuBtnClose');
const menu = document.getElementById('menu');

btnOpen.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

btnClose.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});
