'use strict';

const titles = document.querySelectorAll('.change__color');
const backgrounds = document.querySelectorAll('.change__background');
const buttons = document.querySelectorAll('.top-bar__logo');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    titles.forEach((title) => {
      title.classList.toggle('change__color--active');
    })

    backgrounds.forEach((background) => {
      background.classList.toggle('change__background--active');
    })
  })
})
