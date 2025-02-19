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

//target menu 
const headerMenu = document.querySelector('.header__menu');
const asideMenu = document.querySelector('.aside__menu')
const section = document.querySelector('.section')
const body = document.querySelector('body')

headerMenu.addEventListener('click', () => {
  body.classList.add('menu__active');
  section.classList.add('section__display-none')
})

asideMenu.addEventListener('click', () => {
  body.classList.remove('menu__active');
  section.classList.remove('section__display-none')
})
