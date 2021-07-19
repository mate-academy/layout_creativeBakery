'use strict';

const navLink = document.querySelectorAll('.nav__link-js');
const checkbox = document.querySelector('.navigation__toggler');
const windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 1030) {
  navLink.forEach(el => {
    el.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
    });
  });
}

const textarea = document.querySelector('.feedback__input-textarea');
let marginTop = 70;
const addMargin = (num) => {
  textarea.style.marginTop = marginTop + 'px';
};

addMargin(marginTop);

textarea.addEventListener('keyup', function() {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 5 + 'px';

    if (marginTop > 0) {
      marginTop -= 5;
      addMargin(marginTop);
    }
  }
});
