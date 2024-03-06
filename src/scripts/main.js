'use strict';

const cookie = document.querySelector('.cookie');
const button = document.querySelector('.header__button');
const body = document.querySelector('.body');

const menuIcon = document.querySelector('.header__menu');
const iconClose = document.querySelector('.menu__icon-close');
const menu = document.querySelector('.menu');

const iconOne = document.querySelector('.footer__icon--1');
const iconTwo = document.querySelector('.footer__icon--2');
const iconThree = document.querySelector('.footer__icon--3');
const facebook = document.querySelector('.footer__icon--facebook');
const instagram = document.querySelector('.footer__icon--instagram');
const twitter = document.querySelector('.footer__icon--twitter');

const themeSwitcher = document.querySelector('.header__theme-switcher');
const headerTitle = document.querySelector('.header__title');
const aboutTitle = document.querySelector('.about-us__title');
const infoTitle = document.querySelector('.info__title');
const infoAchiev = document.querySelectorAll('.info__main h3');
const achievItems = Array.from(infoAchiev);
const blueText = document.querySelector('.header__color--blue');
const pinkText = document.querySelector('.header__color--pink');

themeSwitcher.addEventListener('click', () => {
  themeSwitcher.classList.toggle('before-transform');
  body.classList.toggle('body-pink');
  menu.classList.toggle('body-pink');
  headerTitle.classList.toggle('title-pink');
  aboutTitle.classList.toggle('title-pink');
  infoTitle.classList.toggle('title-pink');
  blueText.classList.toggle('text-dark');
  pinkText.classList.toggle('text-pink');

  achievItems.forEach((element) => {
    element.classList.toggle('title-pink');
  });
});

button.addEventListener('mouseover', () => {
  cookie.classList.add('cookie--white');
});

button.addEventListener('mouseout', function () {
  cookie.classList.remove('cookie--white');
});

menuIcon.addEventListener('click', () => {
  menu.classList.add('menu-transform');
  body.classList.add('page-body');
});

iconClose.addEventListener('click', () => {
  menu.classList.remove('menu-transform');
  body.classList.remove('page-body');
});

iconOne.addEventListener('mouseover', () => {
  facebook.classList.add('footer-icons-white');
});

iconOne.addEventListener('mouseout', () => {
  facebook.classList.remove('footer-icons-white');
});

iconTwo.addEventListener('mouseover', () => {
  instagram.classList.add('footer-icons-white');
});

iconTwo.addEventListener('mouseout', () => {
  instagram.classList.remove('footer-icons-white');
});

iconThree.addEventListener('mouseover', () => {
  twitter.classList.add('footer-icons-white');
});

iconThree.addEventListener('mouseout', () => {
  twitter.classList.remove('footer-icons-white');
});

window.addEventListener('hashchange', function () {
  if (window.location.hash === '#product') {
    menu.classList.remove('menu-transform');
    body.classList.remove('page-body');
  } else if (window.location.hash === '#about') {
    menu.classList.remove('menu-transform');
    body.classList.remove('page-body');
  } else if (window.location.hash === '#blog') {
    menu.classList.remove('menu-transform');
    body.classList.remove('page-body');
  } else if (window.location.hash === '#contact') {
    menu.classList.remove('menu-transform');
    body.classList.remove('page-body');
  }
});
