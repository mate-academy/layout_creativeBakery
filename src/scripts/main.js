'use strict';

const achievements = document.querySelector('.achievements');
const counter = document.querySelector('.about__counter');
const left = document.querySelector('.about__button--left');
const right = document.querySelector('.about__button--right');

let position = 0;

function step(shift) {
  const count = achievements.children.length;

  position += shift;

  right.disabled = position >= count - 1;
  left.disabled = position <= 0;

  position = (position + count) % count;

  counter.textContent = ` ${position + 1}`;

  achievements.style.transform = `translateX(${-position * 100}%)`;
}

right.addEventListener('click', function() {
  step(1);
});

left.addEventListener('click', function() {
  step(-1);
});

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

const box = document.querySelector('.header__box');
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

  box.style.transform = `translateY(${-pos * 100}%)`;
}
