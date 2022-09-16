'use strict';

const menuIcon = document.getElementById('menu-toggler');
let isOpen = false;
let isPink = false;
const cookie = document.getElementById('cookie');
const intro = document.getElementById('intro');
const title = document.getElementById('title');
const menu = document.getElementById('menu');
const paragraphs = document.getElementsByClassName('maroon');

menu.style.transition = 'all 200ms ease-out';
cookie.style.transition = 'all 200ms ease-out';
intro.style.transition = 'all 200ms ease-out';
title.style.transition = 'all 200ms ease-out';
menu.style.transform = 'translateY(-100%)';

function dropdownMenu() {
  if (isOpen === true) {
    menu.style.transform = 'translateY(-100%)';
    menuIcon.classList.remove('menu--is-open');
    menuIcon.classList.add('menu--is-closed');
    cookie.style.opacity = '1';
    intro.style.opacity = '1';
    title.style.opacity = '1';
    isOpen = false;
  } else {
    isOpen = true;
    menu.style.transform = 'translateY(0)';
    menuIcon.classList.remove('menu--is-closed');
    menuIcon.classList.add('menu--is-open');
    menu.classList.add('menu-color');
    menu.style.opacity = '1';
  }
}

function changeTheme() {
  const themeIcon = document.getElementById('theme-toggler');
  const headings = document.querySelectorAll('h1, h2');

  themeIcon.style.zIndex = '4';

  if (isPink === true) {
    themeIcon.classList.remove('theme--is-pink');
    themeIcon.classList.add('theme--is-blue');
    document.querySelector('body').classList.remove('bg');
    document.querySelector('body').classList.add('invert-bg');
    document.querySelector('header').backgroundColor = '#eef7ff';
    menuIcon.style.backgroundColor = '#eef7ff';
    menu.style.backgroundColor = '#eef7ff';

    for (let i = 0; i < headings.length; i++) {
      headings[i].style.color = '#1c1a26';
    }

    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = '#1c1a26';
    }
    isPink = false;
  } else {
    themeIcon.classList.remove('theme--is-blue');
    themeIcon.classList.add('theme--is-pink');
    document.querySelector('body').classList.remove('invert-bg');
    document.querySelector('body').classList.add('bg');
    menuIcon.style.backgroundColor = '#ffeefc';
    menu.style.backgroundColor = '#ffeefc';
    document.querySelector('header').backgroundColor = '#ffeefc';

    for (let i = 0; i < headings.length; i++) {
      headings[i].style.color = '#f9512e';
    }

    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = '#45150c';
    }
    isPink = true;
  }
}

menuIcon.addEventListener('click', dropdownMenu);
document.getElementById('theme-toggler').addEventListener('click', changeTheme);
