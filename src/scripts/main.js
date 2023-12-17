'use strict';

const card = document.querySelectorAll('.product__card');

for (let i = 2; i < card.length; i = i + 4) {
  card[i].classList.add('right');
}
