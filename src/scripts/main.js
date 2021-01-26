'use strict';

const navBurder = document.querySelector('.burger');
const menu = document.querySelector('.side-info');
const menuLink = document.querySelector('.menu__list');

navBurder.onclick = function() {
  navBurder.classList.toggle('active');
  menu.classList.toggle('active');
  menuLink.classList.toggle('active');
};
