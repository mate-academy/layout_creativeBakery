'use strict';

const menu = document.querySelector('#menuOverlay');
const navLink = document.querySelectorAll('.nav__link');
const openMenuIcon = document.querySelector('.header__menu-toggler');
const closeMenuIcon = document.querySelector('.menu__hide');
const mainSection = document.querySelector('.page__main');
const mainFooter = document.querySelector('.page__footer');

function openMenu(e) {
  menu.classList.add('menu--is-active');
  mainSection.classList.add('page__main--hide');
  mainFooter.classList.add('page__footer--hide');
  e.preventDefault();
}

function closeMenu(e) {
  menu.classList.remove('menu--is-active');
  mainSection.classList.remove('page__main--hide');
  mainFooter.classList.remove('page__footer--hide');
}

openMenuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);

navLink.forEach((n) => n.addEventListener('click', closeMenu, true));
