'use strict';

const body = document.body;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
  header.classList.toggle('header--canTransform');
  burger.classList.toggle('burger--canTransform');
  nav.classList.toggle('nav--canTransform');
  body.classList.toggle('no-scroll');

  console.log('hello');
});


