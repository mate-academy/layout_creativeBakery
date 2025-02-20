'use strict';

// Функція для перевірки, чи елемент в межах видимої області
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
}

let ignoreAnimation = false;

window.addEventListener('scroll', () => {

  if (ignoreAnimation) return;

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
const asideBlock = document.querySelector ('.aside')
const section = document.querySelector('.section')
const body = document.querySelector('body')
const anchorLinks = document.querySelectorAll('.aside__content a[href^="#"]');

headerMenu.addEventListener('click', () => {
  body.classList.add('menu__active');
  section.classList.add('section__display-none')
  asideBlock.classList.add('aside--open')

})

asideMenu.addEventListener('click', () => {
  body.classList.remove('menu__active');
  section.classList.remove('section__display-none')
  asideBlock.classList.remove('aside--open')
})

// Відновлення прокрутки після натискання на посилання в меню
anchorLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    ignoreAnimation = true;

        // Закриваємо меню і відновлюємо скрол
        body.classList.remove('menu__active');
        section.classList.remove('section__display-none');
        asideBlock.classList.remove('aside--open')

    const targetSectionId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    // Прокручуємо сторінку до потрібної секції
    setTimeout(() => {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Встановлюємо фокус на цей елемент
      targetSection.focus();
    }, 100);

    // Відновлюємо анімацію після прокручування
    setTimeout(() => {
      ignoreAnimation = false;
    },200);
  });
});
