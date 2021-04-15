'use strict';

const numList = document.querySelectorAll('.roller__num-list')[0];

const numUp = function() {
  numList.appendChild(numList.firstElementChild);
};
const numDown = function() {
  numList.prepend(numList.lastElementChild);
};

document.querySelector('.roller__up-arrow').addEventListener('click', numUp);

document.querySelector('.roller__down-arrow').addEventListener(
  'click',
  numDown
);
