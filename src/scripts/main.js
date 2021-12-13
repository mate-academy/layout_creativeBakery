'use strict';
/* eslint-env jquery */

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.page__body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
    $('.header__burger,.header__menu').removeClass('active');
    $('.page__body').removeClass('lock');
  });
});
