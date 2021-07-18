'use strict';

const bakerySliders = document.querySelectorAll('.bakery__slider');
const arrowRight = document.querySelectorAll('.arrow-right');
const arrowLeft = document.querySelectorAll('.arrow-left');

let offset = 0;
let target;

const sliderFunc = (ev) => {
  const itemWidth = document.querySelector('.bakery__slider-item').offsetWidth;
  let n = 0;

  if (target !== ev.target) {
    offset = 0;
  }

  target = ev.target;
  offset += itemWidth;

  for (let i = 0; i < arrowRight.length; i++) {
    if (ev.path[0] === arrowRight[i] || ev.path[0] === arrowLeft[i]) {
      n = i;
    }
  }

  if (ev.path[0] === arrowRight[n]) {
    if (offset >= itemWidth * 3) {
      offset = 0;
    }

    ev.path[1].children[1].children[0].style.left = -offset + 'px';
  } else if (ev.path[0] === arrowLeft[n]) {
    if (offset > 0) {
      offset = -itemWidth * 2;
    }

    ev.path[1].children[1].children[0].style.left = offset + 'px';
  }
};

bakerySliders[0].addEventListener('click', sliderFunc);
bakerySliders[1].addEventListener('click', sliderFunc);
bakerySliders[2].addEventListener('click', sliderFunc);
bakerySliders[3].addEventListener('click', sliderFunc);
