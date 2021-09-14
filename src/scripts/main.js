'use strict';

// const swiper = new Swiper('.swiper', {
//   // direction: 'vertical',
//   loop: true,
//   navigation: {
//     nextEl: '.next',
//     prevEl: '.prev',
//   },
//   autoPlay: true,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
//   pagination: {
//     el: '.hero__slide-num',
//     clickable: true,
//     bulletElement: 'a',
//     // type: 'custom',
//     renderBullet: function(index, className) {
//       return '<a class="' + className + '">' + '0' + (index + 1) + '</a>';
//     },
//   },
// });

const openButton = document.querySelector('.hero__toggle');
const closeButton = document.querySelector('.navigation__toggle');
const menuOpened = document.querySelector('.navigation');

openButton.addEventListener('click', () => {
  menuOpened.classList.add('navigation--opened');
});

closeButton.addEventListener('click', () => {
  menuOpened.classList.remove('navigation--opened');
});
