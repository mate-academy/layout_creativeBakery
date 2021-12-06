'use strict';

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.page__body').toggleClass('lock');
  });
});
