'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu__link');

if (burger && nav) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    const isMenuOpen = nav.classList.toggle('menu--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('body--with-menu');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      document.body.classList.remove('body--with-menu');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    });
  });
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  const href = link.getAttribute('href');

  if (href && (href.startsWith('#') || href === '#')) {
    if (link.classList.contains('burger')) {
      return;
    }

    event.preventDefault();
    history.replaceState(null, null, href);

    if (href !== '#') {
      const targetElement = document.querySelector(href);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else if (
    href &&
    !link.target &&
    !href.startsWith('mailto:') &&
    !href.startsWith('tel:')
  ) {
    event.preventDefault();
    window.location.replace(href);
  }
});
