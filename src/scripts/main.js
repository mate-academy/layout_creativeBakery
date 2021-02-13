'use strict';

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
