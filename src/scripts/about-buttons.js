'use strict';

const list = document.querySelector('.cards');
const prev = document.querySelector('.about-buttons__item--prev');
const next = document.querySelector('.about-buttons__item--next');

let position = 0;

move(0);

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  const count = list.children.length;

  position += shift;

  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;
  list.style.transform = `translateX(${-position * 100}%)`;
}
