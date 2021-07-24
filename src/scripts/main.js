'use strict';
/* eslint-disable no-undef */

const navLink = document.querySelectorAll('.nav__link');
const checkbox = document.querySelector('.nav__checkbox');

navLink.forEach(el => {
  el.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
});

$(() => {
  $('.fade').slick({
    // prevArrow: "<img src='./images/left.svg' class='left' alt='1'>",
    // nextArrow: "<img src='./images/right.svg' class='next' alt='2'>",
    prevArrow: '<div class="left"></div>',
    nextArrow: '<div class="right"></div">',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
});

const textarea = document.querySelector('.feedback__message');

textarea.addEventListener('keyup', function() {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 5 + 'px';
  }
});
