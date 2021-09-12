'use strict';

const mapa = document.querySelector('.navigation__img');
const plus = document.querySelector('.scroll__button--positive');
const minus = document.querySelector('.scroll__button--negative');

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
