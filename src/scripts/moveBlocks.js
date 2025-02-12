'use strict';

// Функція для перевірки, чи елемент в межах видимої області
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
}

window.addEventListener('scroll', () => {
  const boxesLeft = document.querySelectorAll('.left');
  const boxesRight = document.querySelectorAll('.right')


  boxesLeft.forEach(box => {
    if (isElementInViewport(box)) {
      box.classList.add('active');
    }
  });

  boxesRight.forEach(box => {
    if (isElementInViewport(box)) {
      box.classList.add('active');
    }
  });
});
