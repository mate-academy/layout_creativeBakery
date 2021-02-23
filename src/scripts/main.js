'use strict';

const burgerOpen = document.getElementById('burger');
const burgerClose = document.getElementById('burger-close');
const header = document.getElementById('header-mobile');
const mobileLinks = document.getElementsByClassName('header__nav-mobile-item');

const menuOpen = () => {
  header.style.display = 'flex';
};

const menuClose = () => {
  header.style.display = 'none';
};

burgerOpen.addEventListener('click', menuOpen);
burgerClose.addEventListener('click', menuClose);
[...mobileLinks].map(item => item.addEventListener('click', menuClose));
