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
const productCard1 = document.querySelector('.product__card--1');
const productCard2 = document.querySelector('.product__card--2');
const productCard3 = document.querySelector('.product__card--3');
const productCard4 = document.querySelector('.product__card--4');
const productCard5 = document.querySelector('.product__card--5');
const productCard6 = document.querySelector('.product__card--6');
const about = document.querySelector('.about-us');

function scrolling(e) {
  if (isPartiallyVisible(description)) {
    description.classList.add('_active');
  }

  if (isFullyVisible(title)) {
    title.classList.add('_active');
  }

  if (isFullyVisible(productCard1)) {
    productCard1.classList.add('_active');
  }

  if (isFullyVisible(productCard2)) {
    productCard2.classList.add('_active');
  }

  if (isFullyVisible(productCard3)) {
    productCard3.classList.add('_active');
  }

  if (isFullyVisible(productCard4)) {
    productCard4.classList.add('_active');
  }

  if (isFullyVisible(productCard5)) {
    productCard5.classList.add('_active');
  }

  if (isFullyVisible(productCard6)) {
    productCard6.classList.add('_active');
  }

  if (isFullyVisible(about)) {
    about.classList.add('_active');
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
