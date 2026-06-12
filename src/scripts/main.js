'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

if (burger && menu) {

  function openMenu() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    body.classList.add('no-scroll');

    burger.setAttribute('aria-expanded', 'true');
  }


  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');

    burger.setAttribute('aria-expanded', 'false');
  }


  function toggleMenu() {
    const isOpen = burger.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }


  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });


  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      closeMenu();
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

}
