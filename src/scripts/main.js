'use strict';

const menuToggle = document.getElementById('menu-toggle');
const mobileMenuLinks = document.querySelectorAll(
  '.mobile-menu__link, .mobile-menu__contact',
);

function updatePageScroll() {
  document.body.classList.toggle('is-menu-open', menuToggle.checked);
}

menuToggle.addEventListener('change', updatePageScroll);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
    updatePageScroll();
  });
});

const THEME_STORAGE_KEY = 'bakerlab-theme';
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.setAttribute(
    'aria-pressed',
    theme === 'blue' ? 'true' : 'false',
  );
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'pink';

applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme =
    root.getAttribute('data-theme') === 'blue' ? 'pink' : 'blue';

  applyTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
});
