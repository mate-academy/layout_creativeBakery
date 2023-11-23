/* eslint-disable no-unused-vars */
'use strict';

let stylesToggled = false;

function toggleStyles() {
  const body = document.body;
  const header = document.querySelector('header');
  const burger = document.querySelector('.header__burger');
  const icon = document.querySelector('.header__iconMenu');
  const closeIcon = document.querySelector('.header__iconMenu-close');

  if (stylesToggled) {
    // If styles are toggled, revert the changes
    body.style.overflowY = 'auto';
    header.classList.remove('fixed');
    burger.style.display = 'none';
    icon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    // If styles are not toggled, apply the changes
    body.style.overflowY = 'hidden';
    header.classList.add('fixed');
    burger.style.display = 'block';
    icon.style.display = 'none';
    closeIcon.style.display = 'block';
  }

  // Toggle the flag
  stylesToggled = !stylesToggled;
}
