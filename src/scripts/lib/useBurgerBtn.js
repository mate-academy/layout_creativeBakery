'use strict';

export const useBurgerBtn = () => {
  const header = document.getElementById('header');
  const burgerBtn = document.getElementById('burger-btn');
  const body = document.documentElement;
  const nav = document.getElementById('nav');

  const onOpen = () => {
    header.classList.add('active');
    body.style.overflowY = 'hidden';

    const onNavigate = (event) => {
      const { href } = event.target;
      const isNavLink = !!href;

      if (isNavLink) {
        onClose();

        nav.removeEventListener('click', onNavigate);
      }
    };

    nav.addEventListener('click', onNavigate);
  };

  const onClose = () => {
    header.classList.remove('active');
    body.style.overflowY = 'auto';
  };

  window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth >= 1023;

    if (isDesktop) {
      onClose();
    }
  });

  burgerBtn.addEventListener('click', () => {
    const isMenuOpen = header.classList.contains('active');

    if (isMenuOpen) {
      onClose();
    } else {
      onOpen();
    }
  });
};
