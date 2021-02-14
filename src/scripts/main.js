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

const divs = document.getElementsByClassName('header__index');

let i = 0;
const def = document.getElementById('def');

def.setAttribute('class', 'header__index--big');

// eslint-disable-next-line no-undef
down.onclick = function() {
  i = (i < divs.length - 1) ? i + 1 : 0;

  if (def.hasAttribute('class')) {
    def.removeAttribute('class');
    def.setAttribute('class', 'header__index');
  }

  divs[1 - i].classList.remove('header__index--big');
  divs[i].classList.add('header__index--big');
};

// eslint-disable-next-line no-undef
up.onclick = function() {
  i = (i > 0) ? i - 1 : divs.length - 1;

  if (def.hasAttribute('class')) {
    def.removeAttribute('class');
    def.setAttribute('class', 'header__index');
  }

  divs[1 - i].classList.remove('header__index--big');

  divs[i].classList.add('header__index--big');
};

const check = document.getElementById('toggler');

// eslint-disable-next-line no-undef
show.onclick = function() {
  if (check.hasAttribute('checked')) {
    check.removeAttribute('checked');

    return;
  }
  check.setAttribute('checked', 'checked');
};

// eslint-disable-next-line no-undef
end.onclick = function() {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
};

// eslint-disable-next-line no-undef
end1.onclick = function() {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
};

// eslint-disable-next-line no-undef
end2.onclick = function() {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
};

// eslint-disable-next-line no-undef
end3.onclick = function() {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
};
