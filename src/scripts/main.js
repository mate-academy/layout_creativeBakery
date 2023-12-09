'use strict';

const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const menuButton = document.querySelector('.header__burger');
const menuClose = document.querySelectorAll('.menu__link, .menu__item');
const menuIconOne = document.querySelector('.header__btn--1');
const menuIconTwo = document.querySelector('.header__btn--2');
const body = document.querySelector('.page__body');

menuButton.addEventListener('click', toggleMenu);

menuClose.forEach((btn) => {
  btn.addEventListener('click', hideMenu);
  logo.addEventListener('click', hideMenu);
});

function toggleMenu() {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
  body.classList.toggle('lock');
  menuIconOne.classList.toggle('active');
  menuIconTwo.classList.toggle('active');
}

function hideMenu() {
  menu.classList.remove('active');
  menuButton.classList.remove('active');
  body.classList.remove('lock');
  menuIconOne.classList.remove('active');
  menuIconTwo.classList.remove('active');
}
