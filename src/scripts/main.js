'use strict';

const openMenu = document.getElementById('open-menu');
const navHidden = document.getElementById('nav-hidden');

document.addEventListener('click', (event) => {
  if (event.target === openMenu || openMenu.contains(event.target)) {
    navHidden.style.right = 0;
  } else {
    navHidden.style.right = '-100vw';
  }
});

let prevScrollPos = window.pageYOffset;
const nav = document.getElementById('nav');

window.onscroll = () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-8%';
  }

  prevScrollPos = currentScrollPos;
};
