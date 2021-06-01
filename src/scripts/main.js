'use strict';

const numList1 = document.querySelectorAll('.roller__num-list')[0];
const numList2 = document.querySelectorAll('.roller__num-list')[1];

const numUp1 = function() {
  numList1.appendChild(numList1.firstElementChild);
};
const numDown1 = function() {
  numList1.prepend(numList1.lastElementChild);
};

const numUp2 = function() {
  numList2.appendChild(numList2.firstElementChild);
};
const numDown2 = function() {
  numList2.prepend(numList2.lastElementChild);
};

document.querySelectorAll('.roller__up-arrow')[0].addEventListener(
  'click',
  numUp1
);

document.querySelectorAll('.roller__down-arrow')[0].addEventListener(
  'click',
  numDown1
);

document.querySelectorAll('.roller__up-arrow')[1].addEventListener(
  'click',
  numUp2
);

document.querySelectorAll('.roller__down-arrow')[1].addEventListener(
  'click',
  numDown2
);
