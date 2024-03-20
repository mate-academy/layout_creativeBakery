'use strict';

const navListItems = document.querySelectorAll('.nav__list');
const menuListItems = document.querySelectorAll('.menu__list');
const closeButton = document.querySelector('.icon--close');
const menuButton = document.querySelector('.icon--menu');

document.addEventListener('DOMContentLoaded', function() {
  menuButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'hidden';
    document.querySelector('.page').classList.add('lock-scrollbar');
  });

  closeButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'auto';
    document.querySelector('.page').classList.remove('lock-scrollbar');
  });

  navListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.page').style.overflow = 'auto';
      document.querySelector('.page').classList.remove('lock-scrollbar');
    });
  });

  menuListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.page').style.overflow = 'auto';
      document.querySelector('.page').classList.remove('lock-scrollbar');
    });
  });
});

const imageElement = document.querySelector('.creative__cookie');
const button = document.querySelector('.button');

button.addEventListener('mouseover', () => {
  imageElement.src = '/Icon-cookie-white.bb0f611b.svg'; // Update to new image path
});

button.addEventListener('mouseout', () => {
  imageElement.src = '/Icon-cookie.72c0e390.svg'; // Revert to original image path
});
