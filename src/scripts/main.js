'use strict';

  function handleScroll() {
    const topBar = document.querySelector('.top-bar-header');
    if (window.scrollY > 0) {
      topBar.classList.add('scrolled');
    } else {
      topBar.classList.remove('scrolled');
    }
  }

window.addEventListener('scroll', handleScroll);

function changeBackgroundColor() {
  const pageBody = document.querySelector('.page__body');
  const currentColor = getComputedStyle(pageBody).getPropertyValue('background-color').trim();

  if (currentColor === 'rgb(255, 238, 252)') {
    pageBody.style.backgroundColor = '#EEF7FF';
  } else {
    pageBody.style.backgroundColor = '#FFEEFC';
  }
}

setInterval(changeBackgroundColor, 5000);
