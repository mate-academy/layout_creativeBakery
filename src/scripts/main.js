'use strict';

const burger = document.querySelector('.header__btn');
const burgerMenue = document.querySelector('.burger__menue');
const links = document.querySelector('.burger__link');

burger.addEventListener('click', () => {
  burgerMenue.classList.toggle('burger__menue--active');
  burger.classList.toggle('active');
});

links.addEventListener('click', () => {
  if (links.classList.contains('burger__link')) {
    burgerMenue.classList.remove('burger__menue--active');
    burger.classList.remove('active');
  }
});

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    document.body.classList.add('landscape');
  } else {
    document.body.classList.remove('landscape');
  }
}
checkOrientation();
window.addEventListener('resize', checkOrientation);
