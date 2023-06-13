'use strict';

// nav-mobile

const burgerMenuBtn = document.querySelector('.burger-menu');
const burgerMenuLines = document.querySelectorAll('.burger-menu__line');
const mobileNav = document.querySelector('.nav-mobile');
const mobileNavLinks = document.querySelectorAll('.nav-mobile__link');

burgerMenuBtn.addEventListener('click', function() {
  burgerMenuBtn.classList.toggle('burger-menu--active');

  if (burgerMenuBtn.classList.contains('burger-menu--active')) {
    burgerMenuLines.forEach(line => {
      line.classList.add('burger-menu__line--active');
    });
    mobileNav.classList.add('nav-mobile--active');
    document.body.style.overflow = 'hidden';
  } else {
    burgerMenuLines.forEach(line => {
      line.classList.remove('burger-menu__line--active');
    });
    mobileNav.classList.remove('nav-mobile--active');
    document.body.style.overflow = 'auto';
  }
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('nav-mobile--active');
    burgerMenuBtn.classList.remove('burger-menu--active');

    burgerMenuLines.forEach(line => {
      line.classList.remove('burger-menu__line--active');
    });
    document.body.style.overflow = 'auto';
  });
});
