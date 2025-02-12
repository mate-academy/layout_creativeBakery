'use strict'

window.addEventListener('load', () => {
  // Створюємо основні елементи до завантаження сторінки
  const body = document.body;

  // Створюємо блок анімації
  const loadAnimation = document.createElement('div');
  loadAnimation.classList.add('load__animation');

  // Створюємо круг для анімації
  const circle = document.createElement('div');
  circle.classList.add('circle');

  // Додаємо круг в блок анімації
  loadAnimation.appendChild(circle);

  // Додаємо блок анімації в body
  body.appendChild(loadAnimation);

  // Затримка для анімації, яка триває 1.5 секунди перед показом контенту
  setTimeout(() => {
    const mainContent = document.querySelector('.main__content');

    // Сховуємо анімацію завантаження
    loadAnimation.style.display = 'none';

    // Показуємо основний контент
    mainContent.classList.remove('hiden');
    mainContent.classList.add('show');
  }, 1500); // Час анімації
});
