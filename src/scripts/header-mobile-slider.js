'use strict';

const box = document.querySelector('.header__box');
const up = document.querySelector('.header__vector--up');
const down = document.querySelector('.header__vector--down');

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

  // box.children[pos].classList.toggle('header__number--active')

  // if(odd === '+') {
  //   box.children[pos-1].classList.toggle('header__number--active')
  // }

  // if(odd === '-') {
  //   box.children[pos+1].classList.toggle('header__number--active')
  // }

  box.children[pos].classList.add('header__number--active');
  box.children[pos - 1].classList.remove('header__number--active');
  box.children[pos + 1].classList.remove('header__number--active');
}
