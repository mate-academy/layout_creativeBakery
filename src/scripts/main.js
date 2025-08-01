'use strict';

const navLinks = document.querySelectorAll(
  '.header_nav_link, .header_nav_contactlink',
);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const checkbox = document.querySelector('input');
    checkbox.checked = false;
  });
});
