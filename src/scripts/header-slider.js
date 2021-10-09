'use strict';

const box = document.querySelector('.header__box');
const numbers = document.querySelector('.right-panel__numbers-box');
const up = document.querySelector('.right-panel__vector--up');
const down = document.querySelector('.right-panel__vector--down');

up.addEventListener('click', function() {
  go(-1);
});

down.addEventListener('click', function() {
  go(1);
});

let pos = 0;

function go(shift) {
  const count = box.children.length;

  pos += shift;

  down.disabled = pos >= count - 1;
  up.disabled = pos <= 0;
  pos = (pos + count) % count;
  box.style.transform = `translateY(${-pos * 100}%)`;

  numbers.children[pos].classList.add('right-panel__number--active');
  numbers.children[pos - 1].classList.remove('right-panel__number--active');
  numbers.children[pos + 1].classList.remove('right-panel__number--active');
}
