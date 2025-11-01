'use strict';

(() => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__action');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.header__link'); // 👈 додаємо вибірку лінків меню

  if (!burger || !menu) return;

  // Відкриття/закриття бургер-меню
  burger.addEventListener('click', () => {
    menu.classList.toggle('action-visible');
    burger.classList.toggle('header__burger--active');
    body.classList.toggle('no-scroll'); // блокуємо скрол
  });

  // Закриваємо меню після кліку по пункту (і працює перехід по якорю)
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('action-visible');
      burger.classList.remove('header__burger--active');
      body.classList.remove('no-scroll');
    });
  });
})();

(() => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }
  });
})();

(() => {
  document.querySelectorAll('.what__row').forEach((row, index) => {
    // index починається з 0 → тому перевіряємо (index + 1) % 2 === 0
    if ((index + 1) % 2 === 0) {
      const items = row.querySelectorAll('.what__item');
      if (items[0]) items[0].classList.add('item--1');
      if (items[1]) items[1].classList.add('item--2');
    }
  });
})();
