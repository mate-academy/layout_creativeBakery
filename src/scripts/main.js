'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const animatedElements = document.querySelectorAll('.stats__box');

function isInView(element) {
  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  return (elementTop <= windowHeight) && (elementBottom >= 0);
}

window.addEventListener('scroll', function() {
  animatedElements.forEach(function(element) {
    if (isInView(element)) {
      element.classList.add('stats__box--animated');
    }
  });
});

window.addEventListener('scroll', function() {
  const statsElement = document.querySelector('.stats');
  const windowHeight = window.innerHeight;
  const elementTop = statsElement.getBoundingClientRect().top;
  const elementBottom = statsElement.getBoundingClientRect().bottom;

  if ((elementTop <= windowHeight) && (elementBottom >= 0)) {
    statsElement.classList.add('stats--show');
  }
});
