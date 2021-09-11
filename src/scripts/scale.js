'use strict';

const mapa = document.querySelector('.map__image');
const plus = document.querySelector('.scale__item--close');
const minus = document.querySelector('.scale__item--far');

minus.disabled = true;

plus.addEventListener('click', function() {
  zoom(10);
});

minus.addEventListener('click', function() {
  zoom(-10);
});

let add = 0;

function zoom(shift) {
  add += shift;
  minus.disabled = add <= 1;
  plus.disabled = add >= 150;
  mapa.style.transform = `scale(${100 + add}%)`;
}
