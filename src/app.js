'use strict';

const page = document.body;
const switcher = document.querySelector('.theme-switcher');
const themeName = document.querySelector('.theme-name');
const buttons = document.querySelectorAll(`.hero-block__button`);

console.log(buttons);


switcher.addEventListener('click', () => {
  const isBlue = page.classList.toggle('page__body--theme--blue');

  themeName.textContent = isBlue ? 'Blue theme' : 'Pink theme';

  switcher.classList.toggle('blue', isBlue);

  buttons.forEach(button => {


    if (button.classList.contains('hero-block__button--on-desktop')) {
      button.classList.toggle('hero-block__button--on-desktop--theme-blue');

    } else {
      button.classList.toggle('hero-block__button--theme-blue');
    }
  });
});
