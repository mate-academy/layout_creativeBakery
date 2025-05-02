'use strict';

const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');

const toggleClasses = () => {
  header.classList.toggle('header--canTransform');
  burger.classList.toggle('burger--canTransform');
  nav.classList.toggle('nav--canTransform');
  body.classList.toggle('no-scroll');
};

burger.addEventListener('click', toggleClasses);

if (window.innerWidth < 1280) {
  navItem.forEach((item) => item.addEventListener('click', toggleClasses));
}
