'use strict';

const cBlack = '#1C1A26';
const cLightBlue = '#EEF7FF';
const cLightPink = '#FFEEFC';
const cAccentOrange = '#F9512E';

document.addEventListener('DOMContentLoaded', function () {
  const colors = document.querySelectorAll('.color');

  colors.forEach((color) => {
    color.addEventListener('click', function () {
      const body = document.body;
      const isPink = color.classList.contains('color--orange');
      const menu = document.querySelector('.menu');
      const headerTitle = document.querySelector('.header__title');
      const headerButton = document.querySelector('.header__button');
      const headings = document.querySelectorAll('.heading');
      const productButtons = document.querySelectorAll('.product__button');

      headings.forEach((heading) => {
        heading.classList.toggle('heading--colormodifier', isPink);
      });

      if (isPink) {
        body.style.backgroundColor = cLightPink;
      } else {
        body.style.backgroundColor = cLightBlue;
      }

      productButtons.forEach((button) => {
        if (isPink) {
          button.style.backgroundColor = cLightPink;
        } else {
          button.style.backgroundColor = cLightBlue;
        }
      });

      if (isPink) {
        headerButton.classList.add('header__button--pink');
        headerButton.classList.remove('header__button--blue');
        headerTitle.style.color = cAccentOrange;
        menu.style.backgroundColor = cLightPink;
      } else {
        headerButton.classList.add('header__button--blue');
        headerButton.classList.remove('header__button--pink');
        headerTitle.style.color = cBlack;
        menu.style.backgroundColor = cLightBlue;
      }
    });
  });
});

function toggleSwitcher() {
  const switcher = document.querySelector('.page__switcher-color-palette');
  const button = document.querySelector('.page__switcher-button');

  if (!switcher.classList.contains('page__switcher--visible')) {
    button.style.transform = 'rotate(540deg)';
    switcher.classList.add('page__switcher--visible');
  } else {
    button.style.transform = 'rotate(0deg)';
    switcher.classList.remove('page__switcher--visible');
  }
}
