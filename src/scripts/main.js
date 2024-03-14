'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuLink = document.querySelector('.navbar__menu');
  const menuClose = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');

  function openMenu() {
    menu.style.display = 'block';
  }

  function closeMenu() {
    menu.style.display = 'none';
  }

  menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    openMenu();
  });

  menuClose.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
  });

  const menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        closeMenu();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
