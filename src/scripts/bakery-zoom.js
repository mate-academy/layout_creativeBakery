'use strict';

const mapa = document.querySelector('.bakershop__mapa');
const plus = document.querySelector('.bakershop__button-zoom--plus');
const minus = document.querySelector('.bakershop__button-zoom--minus');

plus.addEventListener('click', function() {
  zoom(10);
});

minus.addEventListener('click', function() {
  zoom(-10);
});

let add = 0;

function zoom(shift) {
  add += shift;
  mapa.style.transform = `scale(${100 + add}%)`;
}
