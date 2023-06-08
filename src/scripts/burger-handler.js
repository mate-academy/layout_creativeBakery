'use strict';

const uncheckers = document.querySelectorAll('[data-burger]');
const burger = document.querySelector('#burger');

for (const unchecker of uncheckers) {
  unchecker.addEventListener('click', () => {
    burger.checked = false;
  });
}
