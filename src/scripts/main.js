'use strict';

const slider = document.querySelector('.counter');
const backgroundList = document.querySelector('.background-container');
const up = document.querySelector('.nav-button--up');
const down = document.querySelector('.nav-button--down');

up.disabled = true;

down.addEventListener('click', function() {
  move(1, '+');
});

up.addEventListener('click', function() {
  move(-1, '-');
});

let position = 0;

function move(shift, direction) {
  const count = slider.children.length;

  position += shift;

  down.disabled = position >= count - 1;
  up.disabled = position <= 0;

  position = (position + count) % count;
  backgroundList.style.transform = `translateY(${-position * 101}%)`;
  slider.children[position].classList.toggle('counter__item--active');

  if (direction === '+') {
    slider.children[position - 1].classList.toggle('counter__item--active');
  } else {
    slider.children[position + 1].classList.toggle('counter__item--active');
  }
}
