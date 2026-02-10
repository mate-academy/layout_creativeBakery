'use strict';

// 1. Знаходимо чекбокс, який керує меню
  const menuToggle = document.getElementById('menu-toggle');

  // 2. Знаходимо всі посилання всередині навігації та кнопку "Contact us"
  const navLinks = document.querySelectorAll('.nav__link, .nav__button');

  // 3. Додаємо слухач подій для кожного посилання
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // 4. Знімаємо галочку, щоб меню закрилося
      menuToggle.checked = false;
    });
  });
