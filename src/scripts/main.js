'use strict';

const burger = document.querySelector('.header__btn');
const burgerMenue = document.querySelector('.burger__menue');
const links = document.querySelectorAll('.burger__link');
const homeLink = document.querySelector('.burger__menue-logo');
const buttom = document.querySelector('.header__button');
const buttomPage = document.querySelector('.header__button-page');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  myButton.disabled = true;
});

buttom.addEventListener('click', () => {
  if (buttomPage.classList.contains('header__button-page')) {
    buttomPage.classList.remove('header__button-page');
    buttomPage.classList.add('disabled--page');
  } else {
    buttomPage.classList.add('header__button-page');
    buttomPage.classList.remove('disabled--page');
  }
});

burger.addEventListener('click', () => {
  burgerMenue.classList.toggle('burger__menue--active');
  burger.classList.toggle('active');
  document.body.classList.remove('landscape');
});

burger.addEventListener('click', () => {
  if (burgerMenue.classList.contains('burger__menue--active')) {
    document.body.classList.add('landscape');
  } else {
    document.body.classList.remove('landscape');
  }
});

links.forEach(function(link) {
  link.addEventListener('click', () => {
    burgerMenue.classList.remove('burger__menue--active');
    burger.classList.remove('active');
    document.body.classList.remove('landscape');
  });
});

homeLink.addEventListener('click', () => {
  burgerMenue.classList.remove('burger__menue--active');
  burger.classList.remove('active');
  document.body.classList.remove('landscape');
});
