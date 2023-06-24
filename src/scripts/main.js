'use strict';

const cards = document.querySelectorAll('.product_card');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu__open');
  } else {
    document.body.classList.remove('menu__open');
  }
});

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.6,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
