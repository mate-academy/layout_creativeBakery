'use strict';

let isOpen = false;
let isPink = false;

function dropdownMenu() {
  const menuIcon = document.getElementById('menu-toggler');
  const menu = document.getElementById('menu');

  menu.style.transition = 'all 200ms ease-out';

  if (isOpen === true) {
    menu.style.transform = 'translateY(-495px)';
    menuIcon.classList.remove('menu-is-open');
    menuIcon.classList.add('menu-is-closed');
    isOpen = false;
  } else {
    menu.style.transform = 'translateY(0)';
    menuIcon.classList.remove('menu-is-closed');
    menuIcon.classList.add('menu-is-open');
    isOpen = true;
  }
}

function changeTheme() {
  const themeIcon = document.getElementById('theme-toggler');

  if (isPink === true) {
    themeIcon.classList.remove('theme-is-pink');
    themeIcon.classList.add('theme-is-blue');
    document.querySelector('body').style.backgroundColor = '#eef7ff';
    document.querySelector('header').style.backgroundColor = '#eef7ff';
    document.getElementById('menu-toggler').style.backgroundColor = '#eef7ff';
    isPink = false;
  } else {
    themeIcon.classList.remove('theme-is-blue');
    themeIcon.classList.add('theme-is-pink');
    document.querySelector('body').style.backgroundColor = '#ffeefc';
    document.querySelector('header').style.backgroundColor = '#ffeefc';
    document.getElementById('menu-toggler').style.backgroundColor = '#ffeefc';
    isPink = true;
  }
}

document.getElementById('menu-toggler').addEventListener('click', dropdownMenu);
document.getElementById('theme-toggler').addEventListener('click', changeTheme);
