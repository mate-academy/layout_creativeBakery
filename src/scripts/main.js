/* eslint-env browser */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('products__visible');
    } else {
      change.target.classList.remove('products__visible');
    }
  });
}

const options = { threshold: [0.1] };
const observer = new IntersectionObserver(onEntry, options);
const cakes = document.querySelectorAll('.products__cakes');
const donuts = document.querySelectorAll('.products__donuts');
const cookies = document.querySelectorAll('.products__cookies');

for (const elm of cakes) {
  observer.observe(elm);
}

for (const elm of donuts) {
  observer.observe(elm);
}

for (const elm of cookies) {
  observer.observe(elm);
}
