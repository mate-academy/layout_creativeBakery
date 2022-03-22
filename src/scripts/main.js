'use strict';

let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling === false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener('DOMContentLoaded', scrolling, false);

const description = document.querySelector('#description');
const title = document.querySelector('#title');
const button = document.querySelector('.header__button');
const productCard = document.querySelectorAll('.product__card');
const about = document.querySelector('.about-us');

function scrolling(e) {
  if (isFullyVisible(description)) {
    description.classList.add('_active');
  } else {
    description.classList.remove('_active');
  }

  if (isFullyVisible(title)) {
    title.classList.add('_active');
  } else {
    title.classList.remove('_active');
  }

  if (isPartiallyVisible(button)) {
    button.classList.add('_active');
  } else {
    button.classList.remove('_active');
  }

  for (let i = 0; i < productCard.length; i++) {
    if (isPartiallyVisible(productCard[i])) {
      productCard[i].classList.add('_active');
    } else {
      productCard[i].classList.remove('_active');
    }
  }

  if (isPartiallyVisible(about)) {
    about.classList.add('_active');
  } else {
    about.classList.remove('_active');
  }
}

function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();

  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();

  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
