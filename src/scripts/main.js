'use strict';

const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

console.log(navLinks);

const toggleClasses = () => {
  header.classList.toggle('header--canTransform');
  burger.classList.toggle('burger--canTransform');
  nav.classList.toggle('nav--canTransform');
  body.classList.toggle('no-scroll');
};

function handleResize() {
  if (window.innerWidth < 1280) {
    navLinks.forEach((item) => {
      item.addEventListener('click', toggleClasses);
    });
  } else {
    navLinks.forEach((item) => {
      item.removeEventListener('click', toggleClasses);
    });
  }
}

burger.addEventListener('click', toggleClasses);

window.addEventListener('resize', handleResize);
