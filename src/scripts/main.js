'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.header__wrapper');
const navLink = document.querySelectorAll('.nav__link--mobile');

toggler.addEventListener('click', () => {
  nav.classList.toggle('header__wrapper--active');
  toggler.classList.toggle('header__burger--active');
}
);

for (const link of navLink) {
  link.addEventListener('click', () => {
    nav.classList.toggle('header__wrapper--active');
    toggler.classList.toggle('header__burger--active');
  });
}
