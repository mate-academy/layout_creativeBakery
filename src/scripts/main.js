'use strict';

const pageBody = document.getElementById('page-body');
const menuOpenIcon = document.querySelector('.icon--menu--open');
const menuCloseIcon = document.querySelector('.icon--menu--close');

function closeMenu() {
  pageBody.classList.remove('page__body--overflow-hidden');
  pageBody.classList.add('page__body--overflow-auto');
}

function openMenu() {
  pageBody.classList.add('page__body--overflow-hidden');
  pageBody.classList.remove('page__body--overflow-auto');
}

menuOpenIcon.addEventListener('click', openMenu);
menuCloseIcon.addEventListener('click', closeMenu);

window.addEventListener('hashchange', function() {
  if (location.hash === '#menu') {
    openMenu();
  } else {
    closeMenu();
  }
});
