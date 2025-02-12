'use strict'

window.addEventListener('load', () => {
  const body = document.body;

  const loadAnimation = document.createElement('div');
  loadAnimation.classList.add('load__animation');

  const circle = document.createElement('div');
  circle.classList.add('circle');

  loadAnimation.appendChild(circle);

  body.appendChild(loadAnimation);

  setTimeout(() => {
    const mainContent = document.querySelector('.main__content');

    loadAnimation.style.display = 'none';

    mainContent.classList.remove('hiden');
    mainContent.classList.add('show');
  }, 1500);
});
