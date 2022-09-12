'use strict';

const menuIcon = document.getElementById('menu-toggler');
let isOpen = false;
let isPink = false;

function dropdownMenu() {
  const cookie = document.getElementById('cookie');
  const intro = document.getElementById('intro');
  const title = document.getElementById('title');
  const menu = document.getElementById('menu');

  menu.style.transition = 'all 200ms ease-out';
  cookie.style.transition = 'all 200ms ease-out';
  intro.style.transition = 'all 200ms ease-out';
  title.style.transition = 'all 200ms ease-out';

  menu.style.opacity = '0';

  if (isOpen === true) {
    menu.style.transform = 'translateY(-100%)';
    menuIcon.classList.remove('menu--is-open');
    menuIcon.classList.add('menu--is-closed');
    cookie.style.opacity = '1';
    intro.style.opacity = '1';
    title.style.opacity = '1';
    document.getElementById('content__intro').style.zIndex = '1';
    isOpen = false;
  } else {
    menu.style.transform = 'translateY(0)';
    menuIcon.classList.remove('menu--is-closed');
    menuIcon.classList.add('menu--is-open');
    cookie.style.opacity = '0.5';
    intro.style.opacity = '0';
    title.style.opacity = '0';
    menu.style.opacity = '1';
    document.getElementById('content__intro').style.zIndex = '0';
    isOpen = true;
  }
}

function changeTheme() {
  const themeIcon = document.getElementById('theme-toggler');
  const headings = document.querySelectorAll('h1, h2');

  themeIcon.style.zIndex = '4';

  if (isPink === true) {
    themeIcon.classList.remove('theme--is-pink');
    themeIcon.classList.add('theme--is-blue');
    document.querySelector('body').style.backgroundColor = '#eef7ff';
    document.querySelector('header').style.backgroundColor = '#eef7ff';
    menuIcon.style.backgroundColor = '#eef7ff';

    for (let i = 0; i < headings.length; i++) {
      headings[i].style.color = '#1c1a26';
    }
    isPink = false;
  } else {
    themeIcon.classList.remove('theme--is-blue');
    themeIcon.classList.add('theme--is-pink');
    document.querySelector('body').style.backgroundColor = '#ffeefc';
    document.querySelector('header').style.backgroundColor = '#ffeefc';
    menuIcon.style.backgroundColor = '#ffeefc';

    for (let i = 0; i < headings.length; i++) {
      headings[i].style.color = '#f9512e';
    }
    isPink = true;
  }
}

menuIcon.addEventListener('click', dropdownMenu);
document.getElementById('theme-toggler').addEventListener('click', changeTheme);
