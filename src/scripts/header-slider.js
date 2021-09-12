'use strict';

const box = document.querySelector('.header__box');
const up = document.querySelector('.right-panel__vector--up');
const down = document.querySelector('.right-panel__vector--down');

up.addEventListener('click', function() {
  go(-1, '+');
});

down.addEventListener('click', function() {
  go(1, '-');
});

let pos = 0;

function go(shift, odd) {
  const count = box.children.length;

  pos += shift;

  down.disabled = pos >= count - 1;
  up.disabled = pos <= 0;
  pos = (pos + count) % count;
  box.style.transform = `translateY(${-pos * 100}%)`;

  // box.children[pos].classList.toggle('right-panel__number--active')

  // if(odd === '+') {
  //   box.children[pos-1].classList.toggle('right-panel__number--active')
  // }

  // if(odd === '-') {
  //   box.children[pos+1].classList.toggle('right-panel__number--active')
  // }

  box.children[pos].classList.add('right-panel__number--active');
  box.children[pos - 1].classList.remove('right-panel__number--active');
  box.children[pos + 1].classList.remove('right-panel__number--active');
}
