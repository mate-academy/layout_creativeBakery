'use strict';

export function closeMenuOnResize() {
  if (window.innerWidth >= 1200) { // Наприклад, 1024px — це твоя "велика" ширина
    window.location.hash = ''; // Скидаємо `:target`, закриваючи меню
  }
}

window.addEventListener('resize', closeMenuOnResize);
