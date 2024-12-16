import '../styles/main.scss';

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.className = 'header';

  const nav = document.createElement('nav');
  nav.className = 'header__nav';

  const logo = document.createElement('div');
  logo.className = 'header__logo';
  logo.textContent = 'Creative Bakery';

  const menu = document.createElement('ul');
  menu.className = 'header__menu';

  const menuItems = ['Home', 'About', 'Products', 'Contact'];
  menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.className = 'header__menu-item';
    menuItem.textContent = item;
    menu.appendChild(menuItem);
  });

  nav.appendChild(logo);
  nav.appendChild(menu);
  header.appendChild(nav);
  document.body.appendChild(header);

  const main = document.createElement('main');
  main.className = 'main-content';

  const heroSection = document.createElement('section');
  heroSection.className = 'hero';

  const heroText = document.createElement('div');
  heroText.className = 'hero__text';
  heroText.textContent = 'Welcome to Creative Bakery';

  heroSection.appendChild(heroText);
  main.appendChild(heroSection);
  document.body.appendChild(main);
});
