'use strict';

const box = document.querySelector('.header__box');
const numbers = document.querySelector('.header__numbers-box');
const up = document.querySelector('.header__vector--up');
const down = document.querySelector('.header__vector--down');

up.addEventListener('click', function() {
  go(-1);
});

down.addEventListener('click', function() {
  go(1);
});

let pos = 0;

function go(shift) {
  const count = numbers.children.length;

  pos += shift;

  down.disabled = pos >= count - 1;
  up.disabled = pos <= 0;
  pos = (pos + count) % count;
  box.style.transform = `translateY(${-pos * 100}%)`;

  [...numbers.children]
    .forEach(item => item.classList.remove('header__number--active'));

  numbers.children[pos].classList.add('header__number--active');
}
