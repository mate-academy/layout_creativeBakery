'use strict';

const list = document.querySelector('.counter');
const prev = document.querySelector('.nav-button--up');
const next = document.querySelector('.nav-button--down');

prev.disabled = true;

let position = 0;

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

  position = (position + count) % count;
  list.children[position].classList.add('counter__item--active');
  list.children[position - 1].classList.remove('counter__item--active');
  list.children[position + 1].classList.remove('counter__item--active');
}
