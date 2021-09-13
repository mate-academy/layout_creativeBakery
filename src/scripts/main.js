'use strict';

/* Определение версии */

const isMobile = {

  Android:
    function() {
      return navigator.userAgent.match(/Android/i);
    },
  iOS:
    function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
  Opera:
    function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
  Windows:
    function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
  any: function() {
    return (
      isMobile.Android() || isMobile.iOS()
      || isMobile.Opera() || isMobile.Windows());
  },
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
};

/* burger */
const iconBurger = document.querySelector('.header__menu-opener');

if (iconBurger) {
  const menuBurger = document.querySelector('.menu');

  iconBurger.addEventListener('click', function(e) {
    menuBurger.classList.toggle('_active');
    iconBurger.classList.toggle('_active');
  });
}
