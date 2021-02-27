'use strict';

//!  Animation button

const buttons = document.getElementsByClassName('butt');

const forEach = Array.prototype.forEach;

forEach.call(buttons, (b) => {
  b.addEventListener('click', addElement);
});

function addElement(event) {
  const addDiv = document.createElement('div');

  const mValue = Math.max(this.clientWidth, this.clientHeight);

  const rect = this.getBoundingClientRect();

  const sDiv = addDiv.style;

  const px = 'px';

  sDiv.width = sDiv.height = mValue + px;
  sDiv.left = event.clientX - rect.left - (mValue / 2) + px;
  sDiv.top = event.clientY - rect.top - (mValue / 2) + px;

  addDiv.classList.add('pulse');
  this.appendChild(addDiv);
}

//! Block header
//! Count number

const divs = document.getElementsByClassName('header__index');
let i = 0;

divs[i].classList.add('header__index--big');

document.querySelector('#down').addEventListener('click', () => {
  divs[i].classList.remove('header__index--big');

  i = (i < divs.length - 1) ? i + 1 : 0;

  divs[i].classList.add('header__index--big');
});

document.querySelector('#up').addEventListener('click', () => {
  divs[i].classList.remove('header__index--big');
  i = (i > 0) ? i - 1 : divs.length - 1;

  divs[i].classList.add('header__index--big');
});

//!  Burger menu close or open

const check = document.getElementById('toggler');

document.querySelector('#show').addEventListener('click', () => {
  if (check.hasAttribute('checked')) {
    check.removeAttribute('checked');

    return;
  }
  check.setAttribute('checked', 'checked');
});

document.querySelector('#end').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end1').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end2').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end3').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});
