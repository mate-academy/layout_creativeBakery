'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__open').click(function() {
    $('.burger').slideToggle();
  });
});

$(document).ready(function() {
  $('.burger__close').click(function() {
    $('.burger').slideToggle();
  });
});
