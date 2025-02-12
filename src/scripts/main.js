'use strict';

const body = document.querySelector('.page__body');
const open = document.querySelector('.top-bar__icon--menu');
const close = document.querySelector('.top-bar__icon--close');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
});

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
});

const productCards = document.querySelectorAll('.product-card');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  productCards.forEach((card) => {
    const sectionPosition = card.offsetTop;

    if (scrollPosition > sectionPosition) {
      card.classList.add('product-card--show');
    }
  });
});
