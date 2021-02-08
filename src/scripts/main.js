'use strict';

const navBurder = document.querySelector('.burger');
const menu = document.querySelector('.side-info');
const menuLink = document.querySelector('.menu__list');

navBurder.onclick = function() {
  navBurder.classList.toggle('burger_active');
  menu.classList.toggle('side-info_active');
  menuLink.classList.toggle('menu__list_tablet_active');
};
