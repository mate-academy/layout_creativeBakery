'use strict';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01,
};

const callback = function(entries, observer2) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch (entry.target.getAttribute('data-anim')) {
        case 'scrollAnimation':
          const products = document.querySelector('#products');

          products.style.transform = 'translateY(0)';
          break;

        case 'scrollYear':
          scrollYear();
          observer2.unobserve(entry.target);
          break;
      }
    }

    if (!entry.isIntersecting) {
      const products = document.querySelector('#products');

      products.style.transform = 'translateY(150px)';
    }
  });
};

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('[data-anim]');

targets.forEach(target => {
  observer.observe(target);
});

function scrollYear() {
  let year = 2000;
  const el = document.querySelector('[data-anim="scrollYear"]');
  const interval = setInterval(() => {
    year++;
    el.textContent = year;

    if (year === 2015) {
      clearInterval(interval);
    }
  }, 50);

  const aboutSlider = document.querySelector('.about__slider');

  aboutSlider.style.transform = 'translateY(-233px)';
}
